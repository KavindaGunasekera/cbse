const mysql = require('mysql2');

database = {
    "host": "localhost",
    "user": "root",
    "password": "admin",
    "database": "cbse"
  };

  module.exports.connection = mysql.createConnection({
    host: database.host,
    user: database.user,
    password: database.password,
    database: database.database,
  });