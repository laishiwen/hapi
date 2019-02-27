require('env2')('./.env')

const Hapi = require('hapi');
const HapiAuthJWT2 = require('hapi-auth-jwt2');

const config = require('./config')
const routes = require('./routes')

const PluginHapiSwagger = require('./plugins/hapi-swagger')

const PluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2')

const server = new Hapi.Server(config);

const init = async() => {
    await server.register([
        // HapiAuthJWT2,
        ...PluginHapiSwagger
    ])

    // await PluginHapiAuthJWT2(server);

    server.route([...routes])

    await server.start();

    console.log(`Server running at: ${server.info.uri}`);
}

init();