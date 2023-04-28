module.exports.payrollTransactionTable = `CREATE TABLE IF NOT EXISTS PAYROLL_TRANSACTION (
    transaction_id INT NOT NULL AUTO_INCREMENT,
    employee_id VARCHAR(10) NOT NULL,
    wage_class  VARCHAR(10),
    wage_code  VARCHAR(10),
    wage_hours FLOAT(24),
    amount FLOAT(24),
    tax_amount FLOAT(24),
    last_updated DATE NOT NULL,
    PRIMARY KEY (transaction_id)
  )`;