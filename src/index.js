import express from 'express';

const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(4001);
console.log('http://localhost:4001');