# Chat App

A chat application for learning WebSockets (Socket.io) and improving my existing skills.

This project idea came from [florinpop17](https://github.com/florinpop17)’s [App Ideas](https://github.com/florinpop17/app-ideas) on GitHub.

# User Stories

-   [x] User is prompted to enter a username when he visits the chat app. The username will be stored in the application
-   [x] User can see an **input field** where he can type a new message
-   [x] By pressing the **enter** key or by clicking on the **send** button the text will be displayed in the **chat box** alongside his username (e.g. **John Doe: Hello World!**)

# Bonus features

-   [x] The messages will be visible to all the Users that are in the chat app (using WebSockets)
-   [x] When a new User joins the chat, a message is displayed to all the existing Users
-   [x] Messages are saved in a database
-   [ ] Newcomers can see the number of online users and a preview of the chat
-   [ ] User can send images, videos and links which will be displayed properly
-   [ ] User can select and send an emoji
-   [ ] Users can chat in private
-   [ ] Users can join **channels** on specific topics

# About the application

The idea is to create the application using Node.js with Express.js and Socket.io. Also, I opted to use PostgreSQL as the database (after I’ll explain why PostgreSQL and not MySQL or another database).

Furthermore, I also want to publish the website via Heroku, which is a platform that allows me to publish applications with Node.js, PHP, .NET and so on. That is why I chose PostgreSQL, because Heroku has a built-in free plugin for PostgreSQL. It doesn’t have a plugin for MySQL.
