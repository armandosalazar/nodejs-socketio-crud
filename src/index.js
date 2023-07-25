import express from 'express';
import { Server } from 'socket.io';
import http from 'http';
import sockets from './sockets';
import { PORT } from './config'

const app = express();
app.use(express.static(__dirname + '/public'));

const server = http.createServer(app);
sockets(new Server(server));

server.listen(PORT);
console.log(`Server running on: http://localhost:${PORT}`); // dev