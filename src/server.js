/* eslint-disable no-unused-vars */
const express = require("express");
const { io } = require("socket.io-client");
const { Message } = require("./db/models");

const app = express();
const socket = io(process.env.SOCKET_SERVER_HOST);
app.use(express.json());

app.get("/messages", async (req, res) => {
  const allMessages = await Message.findAll();

  res.json(allMessages);
});

app.get("/users", async (req, res) => {
  
});

/*
  AUTHENTICATION HERE
*/

app.post("/messages", async (req, res) => {
  // to implement yet
});

app.use((req, res) => {
  res.status(404).json({
    error: true,
    statusCode: 404,
    message: "I don't recognize this endpoint... Accepted routes: /messages (GET and POST), /users (GET)" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
