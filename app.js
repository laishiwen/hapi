require('env2')('./.env')

const Hapi = require('hapi');

const config = require('./config')
const routes = require('./routes')

const PluginHapiSwagger = require('./plugins/hapi-swagger')

const server = new Hapi.Server(config);

const init = async () => {
  await server.register(PluginHapiSwagger)

  server.route([...routes])

  await server.start();

  console.log(`Server running at: ${server.info.uri}`);
}

init();