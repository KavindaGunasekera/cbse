const connection = require('../../../database_config').connection;
const payrollTransaction = require('../database/getTransaction');

function getPayrollTransaction(params, res) {
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                console.error('Error connecting to the database: ' + err.stack);
                return;
            }
            console.log('Connected to the database.');
        });
        connection.query(payrollTransaction.getPayrollTransaction, params, (err, result) => {
            if (err) {
                reject(err);
            }
            res.json(result);
        });         
    });
};

module.exports = {
    getPayrollTransaction
}