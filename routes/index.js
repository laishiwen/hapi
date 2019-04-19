const Joi = require("joi");
const models = require("../models");
const validateHelper = require("../utils/validate-helper");

const orders = require("./orders");
const shops = require("./shops");
const users = require("./users");

module.exports = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      console.log(request.auth.credentials);

      return "hello HAPI";
    },
    config: {
      tags: ["api", "tests"],
      description: "测试hello-hapi",
      validate: {
        headers: {
          ...validateHelper["jwtHeaderDefine"]
        }
      }
    }
  },
  ...orders(models, validateHelper),
  ...shops(models, validateHelper),
  ...users(models, validateHelper)
];
