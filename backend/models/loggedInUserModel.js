const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./userModel')

const LoggedInUserSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    openid: {
        type: String,
        required: true
    },
    oauthToken: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('LoggedInUser', LoggedInUserSchema)