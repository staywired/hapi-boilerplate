'use-strict';
const sayHello = require('./say-hello');
const sayHelloId = require('./say-hello-id');

module.exports = {
  sayHello: () => sayHello(),
  sayHelloId: id => sayHelloId(id)
};