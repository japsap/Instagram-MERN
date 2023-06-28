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
        type: Types.ObjectId,
        ref: "Post"
    }
})