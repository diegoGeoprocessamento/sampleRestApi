'use strict'

// importar os pacotes
const http = require('http');
const debug = require('debug')('node:server');
const express = require('express');

// criar o express
const app = express();
const port = normalizePort(process.env.PORT || '3000'); // verificar a porta
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
server.on('error', onError); // verificar erros

console.log('API rodando na porta ' + port);

// verificar a porta
function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }
}

// verificar erros
function onError(error){
    if (error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code){
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}