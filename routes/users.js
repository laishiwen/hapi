const JWT = require('jsonwebtoken')

const GROUP_NAMW = "users"

module.exports = (Joi) => [{
    method: 'POST',
    path: `/${GROUP_NAMW}/createJWT`,
    handler: async(request, h) => {

        const payload = {
            userId: 1,
            exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60,
        }

        return JWT.sign(payload, 'your-secret')
    },
    config: {
        tags: ['api', GROUP_NAMW],
        description: '用于测试的用户 JWT 签发',
        auth: false
    }
}]