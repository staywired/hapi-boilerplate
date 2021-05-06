'use strict'

const { createServer, startServer } = require('./api/server');

createServer()
    .then(startServer)
    .catch(err => {
        console.log(err);
    });