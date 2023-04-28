const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const component = require('./component');

const app = express();

// Configure middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Define routes
app.get("/", (req, res) => {
    console.log('root');
});

app.use(express.json());
app.use('/api', route);
// app.get('/api/getEmployees', employeeController.getEmployees);
// app.post('/users', userController.addUser);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});