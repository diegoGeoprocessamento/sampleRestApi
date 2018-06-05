'use strict'
// servidor

// importar os pacotes e arquivos
const app = require('../src/app'); // importa a aplicação
const debug = require('debug')('node:server');
const http = require('http');

// port
const port = normalizePort(process.env.PORT || '3000'); // verificar a porta
app.set('port', port);

// server
const server = http.createServer(app);

server.listen(port);
server.on('error', onError); // verificar erros
server.on('listening', onListening); // debug
console.log('API rodando na porta ' + port);

// funções do server
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

    const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port;

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

// debug
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
}