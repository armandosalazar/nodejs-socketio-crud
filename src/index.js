import express from 'express';
import { Server } from 'socket.io';
import http from 'http';
import sockets from './sockets';

const app = express();
app.use(express.static(__dirname + '/public'));

const server = http.createServer(app);
sockets(new Server(server));

server.listen(4001);
console.log('Server running on: http://localhost:4001');