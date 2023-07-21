import { prop, getModelForClass, index } from '@typegoose/typegoose';

@index({ from: 1, to: 1 }, { unique: true })
class UserMatchData {
    @prop({ required: true })
    public from!: number;

    @prop({ required: true })
    public to!: string;

    @prop({ required: true })
    public matchRating!: number;
}

const UserMatchDataModel = getModelForClass(UserMatchData);

export default UserMatchDataModel;

export { UserMatchData, UserMatchDataModel };
