const socket = io();

socket.emit("user logged in", username);
