 const socket = io.connect('http://localhost:3000') //creates a new socket object by calling the connect method of the io object.
 
 //getElementById method of the document object to get a reference to an HTML element with the id attribute set to 'sender'.
 const sender = document.getElementById('sender') 
 const message = document.getElementById('message')
 const submitBtn = document.getElementById('submitBtn')
 const output = document.getElementById('output')
 const feedback = document.getElementById('feedback')

   //submitBtn element that listens for a 'click' event. When the submitBtn element is clicked
   submitBtn.addEventListener('click',() => { 
   //emit method of the socket object to send a 'chat' event to the server. The data sent with this event is an object with two properties: message and sender. 
   socket.emit('chat',{ 
      //set to the values of the message and sender elements  
      message: message.value,
      sender: sender.value
    })
 })

   // Listen for the 'chat' event emitted by the server
   socket.on('chat', data => {
   // Clear the content of the feedback element
      feedback.innerHTML = '';
   // Add a new paragraph to the output element containing the sender and message data
      output.innerHTML += '<p><strong>' + data.sender + ': </strong>' + data.message + '</p>';
   // Clear the value of the message element
      message.value = '';
});

   // Add an event listener to the message element that listens for a 'keypress' event
      message.addEventListener('keypress', () => {
   // Emit a 'typing' event to the server with the value of the sender element as data
      socket.emit('typing', sender.value);
});

   // Listen for the 'typing' event emitted by the server
      socket.on('typing', data => {
   // Set the content of the feedback element to display that the user specified by data is typing
      feedback.innerHTML = '<p>' + data + ' typing... </p>';
});
