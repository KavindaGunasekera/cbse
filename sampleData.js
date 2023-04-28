// const mysql = require('mysql2');
const component = require('./component');
const connection = require('./database_config').connection;
const employee = require('./components/person/database/employee');
const payrollTransaction = require('./components/payroll/database/payrollTransaction');

// create a connection to the database
// const connection = mysql.createConnection({
//   host: databaseConfig.database.host,
//   user: databaseConfig.database.user,
//   password: databaseConfig.database.password,
//   database: databaseConfig.database.database,
// });

// connect to the database

let employeeQuery = 'INSERT INTO EMPLOYEE (employee_id, first_name, last_name, valid_from, valid_to) VALUES (?, ?, ?, ?, ?)';
let payrollTransactionQuery = 'INSERT INTO PAYROLL_TRANSACTION (employee_id, wage_class, wage_code, wage_hours, amount, tax_amount, last_updated) VALUES (?, ?, ?, ?, ?, ?, ?)';

function insertEmployees(employee) {
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                console.error('Error connecting to the database: ' + err.stack);
                return;
            }
            console.log('Connected to the database.');
        });
        let params = [employee.employee_id, employee.first_name, employee.last_name, employee.valid_from, employee.valid_to];
        connection.query(employeeQuery, params, (err, result) => {
            if (err) {
                reject(err);
            }
            console.log(result);
            resolve(result);
        });
    });
};

function insertTransactions(transaction) {
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                console.error('Error connecting to the database: ' + err.stack);
                return;
            }
            console.log('Connected to the database.');
        });
        let params = [transaction.employee_id, transaction.wage_class, transaction.wage_code, transaction.wage_hours, transaction.amount, transaction.tax_amount, transaction.last_updated];
        connection.query(payrollTransactionQuery, params, (err, result) => {
            if (err) {
                reject(err);
            }
            console.log(result);
            resolve(result);
        });
    });
};

let employee1 = {
    'employee_id': 'EMP001',
    'first_name': 'Nimal',
    'last_name': 'Perera',
    'valid_from': '2022-01-01',
    'valid_to': '2040-12-31'
};

let employee2 = {
    'employee_id': 'EMP002',
    'first_name': 'Sunil',
    'last_name': 'Mendis',
    'valid_from': '2021-01-01',
    'valid_to': '2025-12-31'
};


let transaction1 = {
    'employee_id': 'EMP001',
    'wage_class': '10',
    'wage_code': '100',
    'wage_hours': '8',
    'amount': null,
    'tax_amount': null,
    'last_updated': '2022-11-01'

}

if (component.components.person.enabled) {
insertEmployees(employee1)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err);
    });

insertEmployees(employee2)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err);
    });

}

if (component.components.payroll.enabled) {
insertTransactions(transaction1)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err);
    });
}

connection.end((err) => {
        if (err) throw err;
        console.log('Connection closed.');
    });    