const Joi = require("joi");

// 分页
const paginationDefine = {
  query: Joi.object({
    limit: Joi.number()
      .integer()
      .min(1)
      .default(10)
      .description("每页条目数"),
    page: Joi.number()
      .integer()
      .min(1)
      .default(1)
      .description("页码"),
    pagination: Joi.boolean().description("是否开启分页，默认为true")
  })
};

// 注册
const userInfoDefine = {
  user_info: Joi.object({
    username: Joi.string()
      .min(5)
      .max(18)
      .required()
      .description("用户名称"),
    password: Joi.string()
      .min(5)
      .max(18)
      .required()
      .description("用户密码")
  })
    .with("username", "password")
    .unknown()
};

// jwt
const jwtHeaderDefine = {
  authorization: Joi.string().required()
};

module.exports = {
  paginationDefine,
  userInfoDefine,
  jwtHeaderDefine
};
