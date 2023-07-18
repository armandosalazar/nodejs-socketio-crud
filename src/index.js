import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
	console.log('a user connected:', socket.id);
	socket.emit('ping');
	socket.on('pong', () => {
		console.log('pong');
	});
});

server.listen(4001, () => {
	console.log('http://localhost:4001');
});