var express = require('express')
var app = express()

var models  = require('./database')

// connect to the Database 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ECP');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to the Database!');
});


app.get('/', function (req, res) {
  res.send('ECP-Server v1.0.0');
});

app.get('/citizen/login',function (req, res) {
	// req.data.username , req.data.password
	res.send(200);
});

app.get('/admin/login',function (req, res) {
	// req.data.username , req.data.password
	res.send(200);
});


app.listen(3000, function () {
  console.log('ECP Server listening on port 3000!')
});

