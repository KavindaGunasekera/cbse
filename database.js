const component = require('./component');
const connection = require('./database_config').connection;
const employee = require('./components/person/database/employee');
const payrollTransaction = require('./components/payroll/database/payrollTransaction');

// connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database.');
});

if (component.components.person.enabled) {
    const employeeQuery = employee.employeeTable;
    connection.query(employeeQuery, (err, result) => {
                        if (err) throw err;
                        console.log('Table "EMPLOYEE" created successfully!');
                    });
}

if (component.components.payroll.enabled) {
    const payrollTransactioQuery = payrollTransaction.payrollTransactionTable;
    connection.query(payrollTransactioQuery, (err, result) => {
                        if (err) throw err;
                        console.log('Table "PAYROLL_TRANSACTION" created successfully!');
                    });
}
  
  // close the connection
connection.end((err) => {
   if (err) throw err;
   console.log('Connection closed.');
});