const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength : [6, "Password is too short"]
    },
    userProfilePicture : {
        type: String,
    },
    userBio : {
        type: String,
    },
    userPosts: {
        type: Array
    },
})

UserSchema.pre("save", async function(next){
    await bcrypt.hash((this.password), 10)
        .then(hash => {
            this.password = hash;

            next()
        })
})

UserSchema.method('comparePassword', function(password){
    return bcrypt.compare(password, this.password)
})

const User = model("User", UserSchema)

module.exports = User;



