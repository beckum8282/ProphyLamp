var mongoose = require('mongoose');

//schema
var postSchema = mongoose.Schema({
    title:{type:String, require:true},
    body:{type:String, require:true},
    createAt:{type:Date, default:Date.now},
    updateAt:{type:Date},
});

//model & export
var Post = mongoose.model('post',postSchema);
module.exports = Post;