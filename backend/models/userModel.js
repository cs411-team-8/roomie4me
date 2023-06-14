const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
    autoIndex: true
})

module.exports = mongoose.model('User', userSchema)