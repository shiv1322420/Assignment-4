const express = require('express');
const app = express();
const port = 5000;
var routes = require('./routes/approutes');
var sql = require('./db')
const bodyParser = require('body-parser');
app.use(bodyParser.json());      
app.use('/addstudent', routes);
app.use('/students', routes);


module.exports = app;
app.listen(port, () => { console.log("server starts..") });
