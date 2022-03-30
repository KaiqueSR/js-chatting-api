const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/pages/index.html");
});

io.on("connection", socket => {
	console.log("Someone connected...");
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
	console.log("Listening on port " + PORT + "...");
});
