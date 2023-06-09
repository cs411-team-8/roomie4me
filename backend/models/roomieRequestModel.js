const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomieRequestSchema = new Schema(
  {
    authorId: {
      type: Number,
      required: true,
    },
    targetSemester: {
      type: String,
      required: true,
    },
    numberOfRoomies: {
      type: Number,
      required: true,
    },
    // only exists if the person has existing housing arrangements
    housingInfo: {
      onCampus: {
        type: Boolean,
        required: false,
      },
      hasHousing: {
        type: Boolean,
        required: true,
      },
      address: {
        type: String,
        required: false,
      },
      longitude: {
        type: Number,
        required: false,
      },
      latitude: {
        type: Number,
        required: false,
      },
      desiredResidence: {
        type: String,
        required: false,
      },
    },
    // how important is similarity in these categories to the user
    preferences: {
      similarAge: {
        type: Number,
        required: false,
        default: 3,
      },
      similarLanguages: {
        type: Number,
        required: false,
        default: 3,
      },
      similarReligion: {
        type: Number,
        required: false,
        default: 3,
      },
      similarCountry: {
        type: Number,
        required: false,
        default: 3,
      },
      similarDegreeProgram: {
        type: Number,
        required: false,
        default: 3,
      },
      similarDrugIntake: {
        type: Number,
        required: false,
        default: 3,
      },
      similarAlcoholIntake: {
        type: Number,
        required: false,
        default: 3,
      },
      similarSleepSchedule: {
        type: Number,
        required: false,
        default: 3,
      },
    },
    expiry: {
      type: Date, //epoch date
      required: true,
    },
    currentStatus: {
      type: String, // open, pending, completed, expired
      required: true,
    },
  },
  {
    timestamps: true,
    autoIndex: true,
  }
);

RoomieRequestSchema.index({ authorId: 1, targetSemester: 1 }, { unique: true });

module.exports = mongoose.model("RoomieRequest", RoomieRequestSchema);
