require("env2")('./.env')

const {
  env
} = process

module.exports = {
  development: {
    dialect: env.MYSQL_DIALECT,
    host: env.MYSQL_HOST,
    database: env.MYSQL_DB_NAME,
    username: env.MYSQL_USERNAME,
    password: env.MYSQL_PASSWORD
  },
  production: {

  }
}