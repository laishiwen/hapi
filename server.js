"use strict"

const hapi = require("hapi")
const path = require("path")
require("env2")('./.env')

const {
  env: {
    HOST,
    PORT
  }
} = process;

const server = hapi.server({
  port: 8000,
  host: HOST,
  address: PORT,
  routes: {
    files: {
      relativeTo: path.join(__dirname, "public")
    }
  }
})

module.exports = server