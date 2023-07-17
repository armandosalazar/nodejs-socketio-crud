import http from 'http';
import {CLIENT_RENEG_LIMIT} from 'tls';


const server = http.createServer((req, res) => {
	res.end('Hello World');
});

console.log('Estamos en el tutorial de Node+Babel :)');

export default server;
