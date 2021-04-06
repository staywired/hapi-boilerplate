'use strict';

// IMPORTS
const Hapi = require('@hapi/hapi');
const Routes = require('./api/routes');

// GET ACCESS TO THE ENV VARIABLES
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

// CREATE HAPI SERVER
const server = Hapi.server({
  port: process.env.PORT,
  host: process.env.HOST || '0.0.0.0' || 'localhost',
  routes: {
    cors: true
  }
});

// SERVER ROUTES
server.route(Routes);

// START SERVER
if (process.env.NODE_ENV !== 'test') {
  server.start();
  console.log('Server running on %s', server.info.uri); 
}
