require('env2')('./.env')

const Hapi = require('hapi');
const HapiAuthJWT2 = require('hapi-auth-jwt2');

const config = require('./config')
const routes = require('./routes')

const PluginHapiSwagger = require('./plugins/hapi-swagger')
const PluginHapiPagination = require('./plugins/hapi-pagination')
const PluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2')

const server = new Hapi.Server(config);

const init = async() => {
    await server.register([
        HapiAuthJWT2,
        ...PluginHapiSwagger,
        ...PluginHapiPagination
    ])

    server.route([...routes])
    
    await PluginHapiAuthJWT2(server);

    await server.start();

    console.log(`Server running at: ${server.info.uri}`);
}

init();