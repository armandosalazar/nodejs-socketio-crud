console.log('Hello World from main.js!');
// io('http://localhost:4001')
socket = io();

socket.on('ping', () => {
    console.log('ping');
    socket.emit('pong');
});