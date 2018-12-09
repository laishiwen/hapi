// 提供要求字段的验证
const joi = require("joi")

const controllers = require('../../controllers')

module.exports = () => {
  return {
    method: "POST",
    path: "/user/login",
    handler: controllers.user.login,
    config: {
      auth: false,
      tags: ["api", "user"],
      description: "用户登录",
      validate: {
        payload: {
          userInfo: joi.object().keys({
            username: joi.string().max(30).required().description("用户名"),
            password: joi.string().min(8).max(30).required().description("密码")
          })
        }
      }
    }
  }
}