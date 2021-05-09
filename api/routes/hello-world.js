'use-strict';

const controllers = require('../controllers');

module.exports = [
    {
      method: 'GET',
      path: '/hello-world',
      handler: () => {
          return controllers.sayHello();
      }
    },
    {
      method: 'GET',
      path: '/hello/{id}',
      handler: request => {
          return controllers.sayHelloId(request.params.id);
      }
    }
];
