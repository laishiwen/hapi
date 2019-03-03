const { authToken, cookie_options } = require("../utils");

const GROUP_NAMW = "users";

module.exports = ({ users }, { userInfoDefine }) => [
  {
    method: "POST",
    path: `/${GROUP_NAMW}/signup`,
    handler: async (request, h) => {
      const { userInfo } = request.payload;

      const result = users.findAll({});

      return h.response("hello").state("token", authToken(888), cookie_options);
    },
    config: {
      tags: ["api", GROUP_NAMW],
      description: "用户注册",
      auth: false,
      validate: {
        payload: {
          ...userInfoDefine
        }
      }
    }
  }
];
