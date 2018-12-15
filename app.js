"use strict"
const views = require("./views")
const server = require("./server")
const routes = require("./routes")
const models = require("./models")
const plugins = require("./plugin")

const { initDb } = require('./libs')

const start = async() => {
    await server.register(plugins)

    await server.views(views)

    await routes.forEach(route => server.route(route))

    await server.start(err => {
        if (err) throw err
    })
    console.log(`Server running at: ${server.info.uri}`)
}

start().then(res => {
    initDb(models)
})