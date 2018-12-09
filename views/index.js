const path = require('path')

module.exports = {
  engines: {
    'html': {
      module: require('handlebars')
    }
  },
  relativeTo: `${path.resolve("public")}`,
  path: "template"
}