const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
    comment : {
        type : String,
        required : true,
    },
    ownerComment : {
        type: String,
        required: true
    }
})

const Comment = model('Comment', CommentSchema);

module.exports = Comment;