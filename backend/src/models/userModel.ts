import {prop, getModelForClass, modelOptions} from '@typegoose/typegoose';
import {warnMixed} from "@typegoose/typegoose/lib/internal/utils";
import {Severity} from "@typegoose/typegoose/lib/internal/constants";

enum HabitFrequency {
    OFTEN,
    SOMETIMES,
    RARELY,
    NEVER
}

@modelOptions({ options: { allowMixed: Severity.ALLOW} })
class User {
    @prop({ required: true, unique: true })
    public openid!: number;

    @prop({ required: true, unique: true })
    public email!: string;

    @prop()
    public phone?: string;

    @prop({ required: true })
    public registered!: boolean;

    @prop()
    public name?: { firstName?: string; lastName?: string };

    @prop()
    public dob?: Date;

    @prop()
    public gender?: string;

    @prop({ type: () => [String] })
    public languages?: string[];

    @prop()
    public religiousAffiliation?: string;

    @prop()
    public internationalStatus?: { international?: boolean; country?: string };

    @prop()
    public degreeProgram?: {
        majors?: string[];
        minors?: string[];
        graduation?: Date;
    };

    @prop()
    public drugs?: {
        smoking?: HabitFrequency;
        vaping?: HabitFrequency;
        alcohol?: HabitFrequency;
        other?: HabitFrequency;
    };

    @prop()
    public weeklySleepSchedule?: {
        weekdays?: { bedtime?: string; waketime?: string };
        weekends?: { bedtime?: string; waketime?: string };
    };

    @prop()
    public aboutMe?: string;

    @prop({ type: () => [String] })
    public aboutMeTags?: string[];
}

const UserModel = getModelForClass(User, {
    schemaOptions: { timestamps: true }
});

export {UserModel, User, HabitFrequency};
