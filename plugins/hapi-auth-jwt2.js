const { development: { jwtsecret:key } } = require('../config/config')

const validate = (decode, request, callback) => {

    const { userId } = decode;

    const credentials = userId ? {userId} : {};

    if (!userId) {
        return {isValid:false,credentials,response:'Invalid token'}
    }

    return {isValid:true,credentials};
}

module.exports = (server) => {

    server.auth.strategy('jwt', 'jwt', {
        key,
        validate,
        verifyOptions: { 
            algorithms: [ 'HS256' ],
         }
    });

    server.auth.default('jwt');
}