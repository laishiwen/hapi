const fs = require("fs")
const path = require("path")
const Sequelize = require("sequelize")

const {
  development: {
    host,
    database,
    username,
    password,
    dialect
  }
} = require("../config/db.conf")

let db = {};

let sequelize = new Sequelize(database,
  username,
  password, {
    host,
    dialect,
    pool: {
      max: 5,
      min: 0,
      idle: 30000
    }
  })

fs.readdirSync(__dirname).filter(function (file) {
  return (file.indexOf(".") !== 0) && (file !== "index.js");
}).forEach(function (file) {
  var model = sequelize["import"](path.join(__dirname, file));
  db[model.name] = model;
});

db.sequelize = sequelize;

module.exports = db;