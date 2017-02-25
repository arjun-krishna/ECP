var express = require('express')
var app = express()

var model  = require('./database')

// connect to the Database 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ECP');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Connected to the Database!');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
	res.send('ECP-Server v1.0.0');
});


// SIGN-UP Functions
// citizen signup
app.post('/citizen/signup', function(req, res) {

	console.log(req.data);
	var citizen = new model['Citizen'](req.data);
	citizen.save(function (err, data) {
		if (err) {
			console.error(err);
			res.sendStatus(406);
		} else {
			res.sendStatus(200);
		}
	});
});

// admin signup
app.post('/admin/signup', function(req, res) {

	var admin = new model['Admin'](req.data);
	admin.save(function (err, data) {
		if (err) {
			console.error(err);
			res.sendStatus(406);
		} else {
			res.sendStatus(200);
		}
	});
});

// LOGIN Functions
app.get('/citizen/login',function (req, res) {
	// req.data.username , req.data.password
	 try {
		 model["Citizen"].find({name: req.data.username}, function(err, data) {
				if (err) {
					console.log(err);
					res.sendStatus(403); 
				} else {
					console.log(data);
				}
		 });
	} catch(e) {
		res.sendStatus(500);
	}
});

app.get('/admin/login',function (req, res) {
	// req.data.username , req.data.password
	try {
		 model["Admin"].find({name: req.data.username}, function(err, data) {
				if (err) {
					console.log(err);
					res.sendStatus(403); 
				} else {
					console.log(data);
				}
		 });
	} catch(e) {
		res.sendStatus(500);
	}
});

// add a complaint
app.post('/complaint/submit', function (req, res) {
	var complaint = new model['Complaint'](req.data);
	complaint.save(function (err, data) {
		if (err) {
			console.error(err);
			res.sendStatus(406);
		} else {
			res.sendStatus(200);
		}
	});
});



app.listen(3000, function () {
	console.log('ECP Server listening on port 3000!')
});

