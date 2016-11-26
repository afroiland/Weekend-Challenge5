var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var employees = require('./routes/employees');
var salary = require('./routes/salary');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // needed by Angular

app.use('/employees', employees)
app.use('/salary', salary)

// serve static files
app.use(express.static(path.resolve('./server/public')));

// server index file
app.get('/home', function(req, res) {
    res.send("hello from the server");
});

//catchall
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.listen(3000, function() {
  console.log("server running on localhost:3000");
});
