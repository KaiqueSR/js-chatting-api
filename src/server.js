/* eslint-disable no-unused-vars */
const express = require("express");
const { Message } = require("./db/models");
const { io } = require("socket.io-client");

const app = express();
const socket = io(process.env.SOCKET_SERVER_HOST);

app.use(express.json());

app.get("/", async (req, res) => {
  // to implement yet
});

app.get("/messages", async (req, res) => {
  // to implement yet
});

app.post("/messages", async (req, res) => {
  // to implement yet
});

app.get("/users", async (req, res) => {
  // to implement yet
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
