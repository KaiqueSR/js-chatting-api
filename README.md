# js-chatting-api
API for jsChatting.

## Project setup

### Install dependencies:
```
npm install
```

### Hot-reloads for development:
```
npm run dev
```

### Lints verification:
```
npm run lint
```

###  Fix lint errors:
```
npm run lint:fix
```

## Usage

The application will be available on `http://localhost:5000` after starting the development server with:
```
npm run dev
```
You can change the port the application will listen to on `src/server.js` at line `112`. Just make sure it isn't the same as [js-chatting-front](https://github.com/KaiqueSR/js-chatting-front) and [js-chatting-socket-server](https://github.com/KaiqueSR/js-chatting-socket-server) ports

### Routes

These are the routes you can make the requests to:

- [GET] `/messages`

    Returns all messages on database.

- [POST] `/users/signup`

    - Arguments (request body - JSON):

        `username`<br>
        `password`
    
    Pass through some verification on username and password values and, if it is all correct, adds an user with these information on database.

- [POST] `/users/login`

    - Arguments (request body - JSON):

        `username`<br>
        `password`

    Creates a JWT token for the user that has the given information if it exists.

- [POST] `/messages`

    - Arguments (request body - JSON):

        `messageText`<br>
        `sender`

    Adds a message on database with the given information.
