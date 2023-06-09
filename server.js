// Import the Express and Socket.IO modules
const express = require('express');
const socket = require('socket.io');
const PORT = 8080;

// Create a new Express app
const app = express();
// Start the Express server on port 3000 and log a message to the console

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Create a new Socket.IO server and attach it to the Express server
const io = socket(server);

// Listen for new connections to the Socket.IO server
io.on('connection', (socket) => {
    // Log the ID of the connected socket to the console
    console.log(socket.id);
    // Listen for the 'chat' event emitted by the client
    socket.on('chat', data => {
        // Emit the 'chat' event to all connected sockets with the data received from the client
        io.sockets.emit('chat', data);
    });
    // Listen for the 'typing' event emitted by the client
    socket.on('typing', data => {
        // Emit the 'typing' event to all connected sockets except for the sender with the data received from the client
        socket.broadcast.emit('typing', data);
    });
});
