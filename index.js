const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/dishes', (req, res, next) => {
    res.end('Will send all dem dishes <3. wala');
});
app.post('/dishes', (req, res, next) => {
    res.end(`adding ${req.body.name} / ${req.body.description}`);
});
app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end(`put not supported`);
});
app.delete('/dishes', (req, res, next) => {
    res.end('deleting all dem dishes :(');
});

app.get('/dishes/:dishId', (req, res, next) => {
    res.end('Will send ${req.params.dishId} <3. wala');
});
app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end(`post not supported`);
});
app.put('/dishes/:dishId', (req, res, next) => {
    res.write(`put ${req.params.dishId}\n`);
    res.end(`put ${req.params.dishId}`);
});
app.delete('/dishes/:dishId', (req, res, next) => {
    res.end(`del ${req.params.dishId}`);
});

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
