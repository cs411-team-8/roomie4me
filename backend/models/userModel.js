const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        openid: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
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
        age: {
            type: Number,
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
            religion: {
                type: String,
                required: false,
            },
            scale: {
                type: Number,
                required: false,
            },
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
                    type: Date,
                    required: false,
                },
                waketime: {
                    type: Date,
                    required: false,
                },
            },
            weekends: {
                bedtime: {
                    type: Date,
                    required: false,
                },
                waketime: {
                    type: Date,
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
