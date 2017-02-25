var mongoose = require('mongoose');

var CitizenSchema = mongoose.Schema({
    name: String,
    password : String,
    ward : String,
    area : String,
   	city : String,
   	state : String
});

// var Citizen = mongoose.model('Citizen', CitizenSchema);

module.exports =  CitizenSchema;