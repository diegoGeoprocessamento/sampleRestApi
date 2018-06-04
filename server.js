'use strict'

// importar os pacotes
const http = require('http');
const debug = require('debug')('node:server');
const express = require('express');

// criar o express
const app = express();
const port = 3000;
app.set('port', port);

// criar o servidor
const server = http.createServer(app);
const router = express.Router();

// criar a rota
const route = router.get('/', (req, res, next) =>{
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});
app.use('/', route);

// rodar a API
server.listen(port);
console.log('API rodando na porta ' + port);