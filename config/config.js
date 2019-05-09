const dotenv = require('dotenv').config();

module.exports = {
  "production": {
    "database": process.env.JAWSDB_database,
    "host": process.env.JAWSDB_host,
    "username": process.env.JAWSDB_username,
    "password": process.env.JAWSDB_password,
    "dialect": "mysql"
  }
}