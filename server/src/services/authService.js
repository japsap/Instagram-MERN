const User = require("../schemas/User");
const jwt = require('../utils/jsonwebtoken')
const AppError = require('../utils/AppError')

require('dotenv').config()

exports.getUsername = (username) => User.findOne({ username });

exports.getUserEmail = (email) => User.findOne({ email });

exports.getUser = (userId) => User.findById(userId);

exports.register = async (username, email, password, userProfilePicture, userBio) => {
  await User.create({
    username,
    email,
    password,
    userProfilePicture,
    userBio,
  });
};


exports.login = async (email, password) => {
    const validUser = await this.getUserEmail(email);
    const validPassword = validUser.comparePassword(password)

    if(!validUser) {
        throw new AppError("Wrong email", { existingUser });
    }

    if (!validPassword) {
        throw new AppError("Wrong password", { existingUser });
    }

    const secret = process.env.JWT_SECRET   
    const payload = {
        _id: validUser._id,
        username: validUser.username,
        email: validUser.email,
        userProfilePicture: validUser.userProfilePicture,
        userBio: validUser.userBio,
    }
    
    const token = await jwt.sign(payload, secret)

    return token;
}