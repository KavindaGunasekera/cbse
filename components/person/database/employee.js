// const mysql = require('mysql');
// const databaseConfig = require('../../database_config');

// // create a connection to the database
// const connection = mysql.createConnection({
//   host: databaseConfig.database.host,
//   user: databaseConfig.database.user,
//   password: databaseConfig.database.password,
//   database: databaseConfig.database.database,
// });

// // connect to the database
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database: ' + err.stack);
//     return;
//   }
//   console.log('Connected to the database.');
// });

// create a table named "users"
module.exports.employeeTable = `CREATE TABLE IF NOT EXISTS EMPLOYEE (
        employee_id VARCHAR(10) NOT NULL,
        first_name VARCHAR(50) NOT NULL,
        last_name  VARCHAR(50) NOT NULL,
        valid_from  DATE NOT NULL,
        valid_to   DATE NOT NULL,
        PRIMARY KEY (employee_id)
      )`;