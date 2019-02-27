const { development: { jwtsecret } } = require('../config/config')

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

    server.auth.strategy('jwt', 'jwt', {
        key: jwtsecret,
        validate: validate
    });

    server.auth.default('jwt');
}