const connection = require('../../../database_config').connection;
const employee = require('../database/getEmployee');


connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the database.');
});


function getEmployee(params, res) {
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                console.error('Error connecting to the database: ' + err.stack);
                return;
            }
            console.log('Connected to the database.');
        });
        connection.query(employee.getEmployee, params, (err, result) => {
            if (err) {
                reject(err);
            }
            res.json(result);
        });         
    });
};

// connection.end((err) => {
//     if (err) throw err;
//     console.log('Connection closed.');
// });

module.exports = {
    getEmployee
}


// getEmployee(null)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });