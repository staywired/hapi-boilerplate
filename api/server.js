'use strict';

// IMPORTS
const Hapi = require('@hapi/hapi');
const Routes = require('./routes');
const Plugins = require('./plugins');

// GET ACCESS TO THE ENV VARIABLES
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// CONFIGURE SERVER
const server = Hapi.server({
  port: process.env.PORT,
  host: process.env.HOST || '0.0.0.0' || 'localhost',
  routes: {
    cors: true
  }
});

// CREATE SERVER
const createServer = async () => {
  // PLUGIN REGISTRATION
  await server.register(Plugins);
  await server.initialize()
  return server
}

// SERVER ROUTES
server.route(Routes);

// START SERVER
const startServer = async () => {
  await server.start()
  console.log(`Server running on ${server.info.uri}`)
  return server
}

// UNHANDLE REJECTION
process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

// EXPORT SERVER 
module.exports = { createServer, startServer }
