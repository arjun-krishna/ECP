var CitizenSchema = require('./citizen.js')
var AdminSchema = require('./admin.js')
var ComplaintSchema = require('./complaint.js')
var CommentSchema = require('./comments.js')

var Citizen = mongoose.model('Citizen', CitizenSchema);
var Admin = mongoose.model('Admin', AdminSchema);
var Comment = mongoose.model('Comment', CommentSchema);
var Complaint = mongoose.model('Citizen', ComplaintSchema);

module.exports = {
	'Citizen' : Citizen,
	'Admin' : Admin,
	'Comment' : Comment,
	'Complaint' : Complaint
}