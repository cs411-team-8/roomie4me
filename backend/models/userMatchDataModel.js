const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserMatchData = new Schema(
    {
        from: {
            type: Number,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
        matchRating: {
            type: Number,
            required: true,
        }
    }
);

UserMatchData.index({ from: 1, to: 1 }, { unique: true });

module.exports = mongoose.model("UserMatchData", UserMatchData);
