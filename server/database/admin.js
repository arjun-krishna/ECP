var mongoose = require('mongoose');

var AdminSchema = mongoose.Schema({
    name: String,
    password : String,
    ward : String,
    area : String,
   	city : String,
   	state : String,
   	rank : Number,
   	department : String,
   	tags : [String]
});

// var Admin = mongoose.model('Admin', AdminSchema);

module.exports =  AdminSchema;