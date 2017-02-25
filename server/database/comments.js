var mongoose = require('mongoose');

var CommentSchema = mongoose.Schema({
    name : String,
    comment : String,
    admin_tags : [mongoose.Types.ObjectId],
    timestamp : Date
});

// var Comment = mongoose.model('Comment', CommentSchema);

module.exports =  CommentSchema;