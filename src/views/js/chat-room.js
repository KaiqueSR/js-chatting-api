/* eslint-disable no-undef */
const socket = io();

function addMessage(msg, sender) {
	let chat = document.querySelector(".chat");

	let messageItem = document.createElement("div");
	let user = document.createElement("p");
	let message = document.createElement("p");

	user.className = "username";
	message.className = "message-text";

	user.textContent = (sender || "js-chatting") + ":";
	message.textContent = msg;

	messageItem.appendChild(user);
	messageItem.appendChild(message);

	messageItem.className = "message";

	chat.appendChild(messageItem);

	chat.scrollTop = chat.scrollHeight;
}

function addOwnMessage(msg) {
	let chat = document.querySelector(".chat");

	let messageItem = document.createElement("div");
	let user = document.createElement("p");
	let message = document.createElement("p");

	user.className = "username";
	message.className = "message-text";

	user.textContent = "You:";
	message.textContent = msg;

	messageItem.appendChild(user);
	messageItem.appendChild(message);

	messageItem.className = "message";

	chat.appendChild(messageItem);

	messageItem.style.marginLeft = `calc(100% - ${messageItem.offsetWidth}px)`;
	message.style.maxWidth = messageItem.offsetWidth - 30 + "px";

	chat.scrollTop = chat.scrollHeight;
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

socket.on("new message", message => {
	addMessage(message.messageText, message.sender);
});

let form = document.querySelector("#send-message-form");
let messageInput = document.querySelector(".message-input");

form.addEventListener("submit", e => {
	e.preventDefault();

	if (messageInput.value) {
		addOwnMessage(messageInput.value);

		socket.emit("send message", {
			messageText: messageInput.value,
			sender: username,
		});

		messageInput.value = "";
	}
});
