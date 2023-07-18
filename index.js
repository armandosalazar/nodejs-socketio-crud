import http from 'http';

const server = http.createServer((req, res) => {
	res.end('Hello World');
});

console.log('Estamos en el tutorial de Node+Babel :)');

server.listen(6000, () => {
	console.log('Server on port 3000');
});

// export default server;
