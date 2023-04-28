# This a node.js application based on component based software engineering concept

# Step 1 :- Since this a node.js application first you need to install node.js in your local pc. https://nodejs.org/

# Step 2 : Then clone the code using this link https://github.com/KavindaGunasekera/cbse.git

# Step 3 : execute "npm install" command to install dependencies.

# Step 4 : Replace host, user, password, database values in database_config.js file with your database connection values.

# example :- 
#    "host": "localhost",
#    "user": "root",
#    "password": "admin",
#    "database": "cbse"

# Step 5 :- Enable or Disable components(person, payroll) in component.js file according your requirment. Default value "enable": true

# Step 6 :- Execute "node database.js" command to create database tables according to enabled components.

# Step 7 :- Execute "node sampleData.js" command to insert sample data to created tables.

# Step 8 :- Execute "node index.js" command to start the server.

# This application has two endpoints

## Employees endpoint - This will return all the employee information - (http://localhost:3000/api/employees)

## Payroll Transactions endpoint - This will return all the Payroll Transactions - (http://localhost:3000/api/payrollTransactions)