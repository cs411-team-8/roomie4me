const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    openid: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: false,
    },
    registered: {
      type: Boolean,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: false,
      },
      lastName: {
        type: String,
        required: false,
      },
    },
    dob: {
      type: Date,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    languages: {
      type: Array,
      required: false,
    },
    religiousAffiliation: {
      type: String,
      required: false,
    },
    internationalStatus: {
      international: {
        type: Boolean,
        required: false,
      },
      country: {
        type: String,
        required: false,
      },
    },
    degreeProgram: {
      majors: {
        type: Array,
        required: false,
      },
      minors: {
        type: Array,
        required: false,
      },
      graduation: {
        type: Date,
        required: false,
      },
    },
    drugs: {
      smoking: {
        type: Number, // 4=often, 3=sometimes, 2=rarely, 1=never
        required: false,
      },
      vaping: {
        type: Number, // 4=often, 3=sometimes, 2=rarely, 1=never
        required: false,
      },
      alcohol: {
        type: Number, // 4=often, 3=sometimes, 2=rarely, 1=never
        required: false,
      },
      other: {
        type: Number, // 4=often, 3=sometimes, 2=rarely, 1=never
        required: false,
      },
    },
    weeklySleepSchedule: {
      weekdays: {
        bedtime: {
          type: String,
          required: false,
        },
        waketime: {
          type: String,
          required: false,
        },
      },
      weekends: {
        bedtime: {
          type: String,
          required: false,
        },
        waketime: {
          type: String,
          required: false,
        },
      },
    },
    aboutMe: {
      type: String,
      required: false,
    },
    aboutMeTags: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
