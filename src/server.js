/* eslint-disable no-unused-vars */
const express = require("express");
const { io } = require("socket.io-client");
const md5 = require("md5");
const { Message, User } = require("./db/models");
const ApiError = require("./apiError");

const app = express();
const socket = io(process.env.SOCKET_SERVER_HOST);
app.use(express.json());

app.get("/messages", async (req, res) => {
  const allMessages = await Message.findAll();

  res.json(allMessages);
});

app.post("/users/signup", async (req, res) => {
  let { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json(new ApiError(400, "Missing arguments in request body"));
  }
  else if (username.length < 3 || password.length < 3) {
    res.status(400).json(new ApiError(400, "Invalid arguments. Arguments must have more than 3 characters"));
  }
  else if (username[0] === " " || username[username.length - 1] === " " || password[0] === " " || password[password.length - 1] === " ") {
    res.status(400).json(new ApiError(400, "Invalid arguments. Do not include space at the start and at the end of the arguments"));
  }
  else if (await User.findOne({ where: { username }})) {
    res.status(400).json(new ApiError(400, "Username already exists"));
  }
  else {
    password = md5(password);

    const user = await User.create({ username, password });

    res.status(201).json({ userId: user.userId, username: user.username });
  }
});

/*
  AUTHENTICATION HERE
*/

app.post("/messages", async (req, res) => {
  const { messageText, sender } = req.body;

  if (!messageText || !sender) {
    res.status(400).json(new ApiError(400, "Missing arguments in request body"));
  }
  else {
    const message = await Message.create({ messageText, sender });

    res.status(201).json(message);
  }
});

app.use((req, res) => {
  res.status(404).json(new ApiError(404, "I don't recognize this endpoint... Accepted routes: /messages (GET and POST), /users (GET)"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
