const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HousingInfoSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    }
})

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
        type: HousingInfoSchema,
        required: false
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