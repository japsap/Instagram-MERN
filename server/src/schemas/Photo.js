const { Types, Schema, model } = require('mongoose');

const PhotoSchema = new Schema({
    imageUrl: {
        type: String,
        required : true,
        minLength: [6, 'Image is too small to be put']
    },
    imageBio : {
        type : String,
        required : true,
        minLength: [6, 'Description is too small']
    },
    ownerName : {
        type : String,
    },
    likes : {
        type : Number,
    }, 
    imageId : {
        type : String,
    },
    createdAt: {
        type: String
    },
    comments:[{
        type: Types.ObjectId,
        ref: "Comment"
    }]
})

const Photo = model('Photo', PhotoSchema);

module.exports = Photo;