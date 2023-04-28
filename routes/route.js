const express = require('express');
let router = express.Router();
const component = require('../component');
const getEmployee = require('../components/person/api/getEmployee');
const getPayrollTransaction = require('../components/payroll/api/getPayrollTransaction');

router
    .route('/employees')
    .get((req, res) => {
        if (component.components.person.enabled) {
            getEmployee.getEmployee(null, res);
            console.log(res);
        }else {
            res.json(null);
        } 
    });

router
    .route('/payrollTransactions')
    .get((req, res) => {
        if (component.components.payroll.enabled) {
            getPayrollTransaction.getPayrollTransaction(null, res);
            console.log(res);
        } else {
            res.json(null);
        }
    });

module.exports = router;