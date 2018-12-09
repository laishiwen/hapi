"use strict"
const views = require("./views")
const server = require("./server")
const routes = require("./routes")
const models = require("./models")
const plugins = require("./plugins")

const initDb = async () => {
  let sequelize = models.sequelize
  sequelize.sync({
    force: false
  }).then(function () {
    console.log("connection database successed")
  }).catch(function (err) {
    console.log("connection failed due to error: %s", err)
  })
}

const start = async () => {
  await server.register(plugins)

  await server.views(views)

  await routes.forEach(route => server.route(route))

  await server.start(err => {
    if (err) throw err
  })
  console.log(`Server running at: ${server.info.uri}`)
}

start().then(res => {
  initDb()
})