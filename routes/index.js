const Joi = require('joi')

const orders = require('./orders')
const shops = require('./shops')

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'hello HAPI';
  },
  config: {
    tags: ['api', 'tests'],
    description: '测试hello-hapi',
  }
}, ...orders(Joi), ...shops(Joi)]