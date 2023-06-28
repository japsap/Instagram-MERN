const User = require('../schemas/User');

exports.getUsername = (username) =>  User.findOne({ username });

exports.getUserEmail = (email) => User.findOne({ email });

exports.getUser = (userId) => User.findById(userId);
