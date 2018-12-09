const Joi = require('joi')
const controllers = require('../../controllers')

const login = require("./login")

module.exports = [
  login()
]