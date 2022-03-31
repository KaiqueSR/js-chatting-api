const socket = io();

function addMessage(msg, sender) {
	let chat = document.querySelector(".chat");

	let messageItem = document.createElement("div");
	let user = document.createElement("p");
	let message = document.createElement("p");

	user.textContent = (sender || "js-chatting") + ":";
	message.textContent = msg;

	messageItem.appendChild(user);
	messageItem.appendChild(message);

	chat.appendChild(messageItem);
}

socket.emit("user logged in", username);

socket.on("connected users", users => {
	let list = document.querySelector(".users-list");
	list.innerHTML = "";

	users = users.filter(user => user != username);

	if (users.length == 0) {
		let msg = document.createElement("p");
		msg.textContent = "You are alone here...";
		list.appendChild(msg);
	}

	for (let user of users) {
		let item = document.createElement("li");
		item.textContent = user;
		list.appendChild(item);
	}
});

socket.on("new user connected", user => {
	if (user != username) {
		addMessage(`${user} connected!`);
	}
});
