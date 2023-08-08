import { prop, getModelForClass, index } from '@typegoose/typegoose';
enum RequestStatus {
  OPEN,
  PENDING,
  COMPLETED,
  EXPIRED
}
@index({ authorId: 1, targetSemester: 1 }, { unique: true })
class RoomieRequest {
  @prop({ required: true })
  public authorId!: number;

  @prop({ required: true })
  public targetSemester!: string;

  @prop({ required: true })
  public numberOfRoomies!: number;

  @prop({
    required: true,
    default: {
      hasHousing: false
    }
  })
  public housingInfo!: {
    onCampus?: boolean;
    hasHousing: boolean;
    address?: string;
    longitude?: number;
    latitude?: number;
    desiredResidence?: string;
  };

  @prop({
    default: {
      similarAge: 3,
      similarLanguages: 3,
      similarReligion: 3,
      similarCountry: 3,
      similarDegreeProgram: 3,
      similarDrugIntake: 3,
      similarAlcoholIntake: 3,
      similarSleepSchedule: 3
    }
  })
  public preferences?: {
    similarAge?: number;
    similarLanguages?: number;
    similarReligion?: number;
    similarCountry?: number;
    similarDegreeProgram?: number;
    similarDrugIntake?: number;
    similarAlcoholIntake?: number;
    similarSleepSchedule?: number;
  };

  @prop({ required: true })
  public expiry!: Date; // epoch date

  @prop({ required: true })
  public currentStatus!: RequestStatus;
}

const RoomieRequestModel = getModelForClass(RoomieRequest, {
  schemaOptions: { timestamps: true, autoIndex: true }
});

export {RequestStatus, RoomieRequest, RoomieRequestModel};