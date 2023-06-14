const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roomieReqSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
    autoIndex: true
})

module.exports = mongoose.model('RoomieRequest', roomieReqSchema)