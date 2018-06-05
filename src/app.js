'use strict'
// aplicação

// importar os pacotes
const express = require('express');

// criar o express
const app = express();
const router = express.Router();

// criar a rota
const route = router.get('/', (req, res, next) =>{
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});
app.use('/', route);

// exporta a aplicação
module.exports = app;
