const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all dem dishes <3. wala');
    })
    .post((req, res, next) => {
        res.end(`adding ${req.body.name} / ${req.body.description}`);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end(`put not supported`);
    })
    .delete((req, res, next) => {
        res.end('deleting all dem dishes :(');
    });
// .get('/dishes/:dishId', (req, res, next) => {
//     res.end('Will send ${req.params.dishId} <3. wala');
// })
// .post('/dishes/:dishId', (req, res, next) => {
//     res.statusCode = 403;
//     res.end(`post not supported`);
// })
// .put('/dishes/:dishId', (req, res, next) => {
//     res.write(`put ${req.params.dishId}\n`);
//     res.end(`put ${req.params.dishId}`);
// })
// .delete('/dishes/:dishId', (req, res, next) => {
//     res.end(`del ${req.params.dishId}`);
// });

module.exports = dishRouter;
