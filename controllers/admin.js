// 提供加密和哈希算法
const crypto = require("crypto")
    // 提供错误状态处理
const boom = require('boom')
    // 生成JWT的信息
const jwt = require("jsonwebtoken")

let models = require('../models')

module.exports = {
    login: async(request, h) => {
        
        const {
            username,
            password
        } = request.payload.userInfo;

        const encryptedPasswd = crypto.createHmac("sha256", process.env.PASSWD_SECRET).update(password).digest("hex");

        const res = await models.admin.findOne({
            where: {
                username,
                password: encryptedPasswd
            }
        })

        const generateJWT = jwtInfo => jwt.sign({
            userId: jwtInfo.id
        }, process.env.JWT_SECRET, {
            expiresIn: "2day",
            subject: "blog user token"
        })

        if (res) {
            
            return h.response({
                code: 0,
                data: {
                    token: generateJWT({
                        id: res.id
                    }),
                    ...res.dataValues
                },
                msg: "登录成功"
            })
        } else {
            return boom.unauthorized("用户或密码错误")
        }
    }
}