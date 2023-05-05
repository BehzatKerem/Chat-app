#Node.js Chat App
This is a simple chat application built with Node.js and Socket.IO.

##Getting Started
To get started, make sure you have Node.js installed on your system. Then, clone this repository and navigate to the project directory.

git clone <repository-url>
cd <repository-name>
Next, install the dependencies by running npm install.

##Running the App
To start the app, run node server.js. This will start the Express server on port 3000.

Open your browser and navigate to http://localhost:3000 to access the chat app.

##How it Works
The app uses Express to serve static files from the public directory and Socket.IO to enable real-time communication between the server and clients.

When a client connects to the Socket.IO server, their socket ID is logged to the console. The server listens for chat and typing events emitted by the client and broadcasts them to all connected clients.

On the client side, a new socket object is created by calling the connect method of the io object. The client listens for click events on the submit button and emits chat and typing events to the server with the data entered by the user.
