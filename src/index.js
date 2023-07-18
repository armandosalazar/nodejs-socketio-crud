import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.listen(4001);
console.log('http://localhost:4001');