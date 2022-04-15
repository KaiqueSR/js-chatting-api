/* eslint-disable no-unused-vars */
const express = require("express");
const { io } = require("socket.io-client");
const { Message } = require("./db/models");
const ApiError = require("./apiError");

const app = express();
const socket = io(process.env.SOCKET_SERVER_HOST);
app.use(express.json());

app.get("/messages", async (req, res) => {
  const allMessages = await Message.findAll();

  res.json(allMessages);
});

app.get("/users", async (req, res) => {
  // to implement yet
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
