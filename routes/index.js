const routeUser = require("./user")

module.exports = [{
    method: "GET",
    path: "/",
    handler: (request, reply) => {
      return reply.file("index.html")
    }
  }, {
    method: "GET",
    path: "/view",
    handler: (request, reply) => {
      return reply.view("default.html")
    }
  },
  ...routeUser
]