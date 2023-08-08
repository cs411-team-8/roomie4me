import { prop, getModelForClass, index } from '@typegoose/typegoose';

@index({ requestSenderId: 1, requestTargetId: 1, requestSemester: 1 }, { unique: true })
class PendingInvite {
    @prop({ required: true })
    public requestSenderId!: number;

    @prop({ required: true })
    public requestTargetId!: number;

    @prop({ required: true })
    public requestSemester!: string;

    @prop()
    public requestMessage?: string;
}

const PendingInviteModel = getModelForClass(PendingInvite, {
    schemaOptions: { timestamps: true, autoIndex: true }
});

export {PendingInviteModel, PendingInvite};
