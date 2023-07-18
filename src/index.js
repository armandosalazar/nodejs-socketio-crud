import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
	console.log('a user connected');
	console.log('info:', socket);
});

server.listen(4001, () => {
	console.log('http://localhost:4001');
});