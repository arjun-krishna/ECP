var mongoose = require('mongoose');
var CommentSchema = require('./comments.js')

var ComplaintSchema = mongoose.Schema({
    filled_by : String,
    timestamp : Date,
    upvotes : { type: Number, default: 0 },
    location : { "lat" : 	Number, "long": Number},
	  ward : String,
    area : String,
   	city : String,
   	State : String,
   	description : String,
   	tags : [String],
   	img: { data: Buffer, contentType: String },
   	comments : [CommentSchema]
});

// var Complaint = mongoose.model('Citizen', ComplaintSchema);

module.exports =  ComplaintSchema;