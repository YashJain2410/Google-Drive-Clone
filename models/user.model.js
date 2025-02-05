const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minLength: [3, 'Username must be at least 3 character long']
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minLength: [13, 'Username must be at least 13 character long']
    },

    password: {
        type: String,
        required: true,
        trim: true,
        minLength: [5, 'Username must be at least 5 character long']
    }
})

const user = mongoose.model('user', userSchema)

module.exports = user;