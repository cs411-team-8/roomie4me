const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PendingInviteSchema = new Schema(
    {
      requestSenderId: {
        type: Number,
        required: true
      },
      requestTargetId: {
        type: Number,
        required: true
      },
      requestSemester: {
        type: String,
        required: true
      },
      requestMessage: {
        type: String,
        required: false
      }
    },
    {
      timestamps: true,
      autoIndex: true,
    }
);

PendingInviteSchema.index({ requestSenderId: 1, requestTargetId: 1, requestSemester: 1 }, { unique: true });

module.exports = mongoose.model("PendingInvite", PendingInviteSchema);
