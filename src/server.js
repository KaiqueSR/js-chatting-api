const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const { Message } = require("./db/models");

let connectedUsers = [];

app.use("/static", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
	res.render("index");
});

app.post("/chat-room", async (req, res) => {
	const { username } = req.body;
	if (username) {
		res.render("chat-room", { username });
	} else {
		res.redirect("/");
	}
});

io.on("connection", socket => {
	socket.on("user logged in", async username => {
		connectedUsers.push({ id: socket.id, username });
		io.emit("new user connected", username);
		io.emit(
			"connected users",
			connectedUsers.map(user => user.username)
		);

		const previousMessages = await Message.findAll();

		for (let message of previousMessages) {
			socket.emit("new message", message);
		}
	});

	socket.on("disconnect", () => {
		connectedUsers = connectedUsers.filter(user => user.id != socket.id);
		io.emit(
			"connected users",
			connectedUsers.map(user => user.username)
		);
	});

	socket.on("send message", message => {
		message.createdAt = new Date().getTime();

		Message.create(message);

		socket.broadcast.emit("new message", message);
	});
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
