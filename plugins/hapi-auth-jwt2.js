const config = require('../config')

const validate = (decode, resquest, callback) => {
    let error;
    const { userId } = decode;

    if (!userId) {
        return callback(error, false, userId)
    }

    const credentials = { userId };

    return callback(error, true, credentials);
}

module.exports = (server) => {
    console.log(config.jwtsecret)
    server.auth.strategy('jwt', 'jwt', {
        key: config.jwtsecret,
        validateFunc: validate
    });

    server.auth.default('jwt');
}