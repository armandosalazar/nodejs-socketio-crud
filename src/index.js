import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

const notes = [];

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
	console.log('Client connected:', socket.id);

	socket.on('client:[new-note]', (note) => {
		console.log(note);
		notes.push(note);
	});
});

server.listen(4001, () => {
	console.log('http://localhost:4001');
});