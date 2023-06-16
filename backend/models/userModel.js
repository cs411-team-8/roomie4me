const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NameSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
})

const ReligiousAffiliationSchema = new Schema({
    religion: {
        type: String,
        required: true
    },
    scale: {
        type: Number,
        required: true
    }
})

const InternationStatusSchema = new Schema({
    international: {
        type: Boolean,
        required: true
    },
    country: {
        type: Array,
        required: true
    }
})

const DegreeProgramSchema = new Schema({
    majors: {
        type: Array,
        required: true
    },
    minors: {
        type: Array,
        required: true
    },
    graduation: {
        type: String,
        required: true
    }
})

const DrugUseSchema = new Schema({
    smoking: {
        type: Number, // 4=often, 3=sometimes, 2=rarely, 1=never
        required: true
    },
    vaping: {
        type: Number, // 4=often, 3=sometimes, 2=rarely, 1=never
        required: true
    },
    alcohol: {
        type: Number, // 4=often, 3=sometimes, 2=rarely, 1=never
        required: true
    },
    other: {
        type: Number, // 4=often, 3=sometimes, 2=rarely, 1=never
        required: true
    }
})

const SleepScheduleSchema = new Schema({
    bedtime: {
        type: Number,
        required: true
    },
    waketime: {
        type: Number,
        required: true
    }
})

const WeeklySleepScheduleSchema = new Schema({
    weekdays: {
        type: SleepScheduleSchema,
        required: true
    },
    weekends: {
        type: SleepScheduleSchema,
        required: true
    }
})

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    age: {
        type: Number,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    languages: {
        type: Array,
        required: false
    },
    religiousAffiliation: {
        type: ReligiousAffiliationSchema,
        required: false
    },
    internationalStatus: {
        type: InternationStatusSchema,
        required: false
    },
    degreeProgram: {
        type: DegreeProgramSchema,
        required: false
    },
    drugs: {
        type: DrugUseSchema,
        required: false
    },
    weeklySleepSchedule: {
        type: WeeklySleepScheduleSchema,
        required: false
    },
    aboutMe: {
        type: String,
        required: false
    },
    aboutMeTags: {
        type: Array,
        required: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)