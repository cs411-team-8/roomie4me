const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoomieRequestSchema = new Schema({
    targetSemester: {
        type: String,
        required: true
    },
    numberOfRoomies: {
        type: Number,
        required: true
    },
    // only exists if the person has existing housing arrangements
    housingInfo: {
        address: {
            type: String,
            required: false
        },
        longitude: {
            type: Number,
            required: false
        },
        latitude: {
            type: Number,
            required: false
        }
    },
    expiry: {
        type: Number, //epoch date
        required: true
    },
    currentStatus: {
        type: Number, // 1=open, 2=pending, 3=completed
        required: true
    }
}, {
    timestamps: true,
    autoIndex: true
})

module.exports = mongoose.model('RoomieRequest', RoomieRequestSchema)