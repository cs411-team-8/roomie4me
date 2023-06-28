const RoomieRequest = require("../models/roomieRequestModel");
const User = require("../models/userModel");
const Invite = require("../models/pendingInvites");

const sendRequest = async (req, res, user) => {
  let requestTargetId = req.body["requestTargetId"];
  let targetSemester = req.body["targetSemester"];
  let message = req.body["message"];

  // make sure all parameters were set
  let variables = {
    requestTargetId: requestTargetId,
    targetSemester: targetSemester,
  };
  for (let [key, value] of Object.entries(variables)) {
    console.log(key + " // " + value);
    if (value === undefined) {
      res.json({
        error: "The parameter '" + key + "' was not set!",
      });
      return;
    }
  }

  let roomieReq = await RoomieRequest.findOne({
    openid: requestTargetId,
    targetSemester: targetSemester,
  });

  let targetUser = await User.findOne({
    openid: requestTargetId,
  });

  if (targetUser === null || targetUser.gender !== user.gender) {
    res.json({
      error: "Invalid target user!",
    });

    return;
  }

  if (targetUser.openid === user.openid) {
    res.json({
      error: "You can't send a request to yourself!",
    });

    return;
  }

  if (targetSemester) {
    //todo: validate target semester too in future?
  }

  Invite.create({
    requestSenderId: user.openid,
    requestTargetId: requestTargetId,
    requestSemester: targetSemester,
    message: message,
  }).then((invite) => {
    res.json(invite);
    //todo
    // NodeMailer.sendNotif(user, targetUser, user.name.firstName + " has requested to contact you!",
    //     `
    // Hey <b>${targetUser.name.firstName}</b>! ${user.name.firstName} ${user.name.lastName} has requested to contact you with regards to your
    // `, true)
  });
};

const declineRequest = async (req, res, user) => {
  let requestSenderId = req.body["requestSenderId"];
  let targetSemester = req.body["targetSemester"];
  let message = req.body["message"];

  // make sure all parameters were set
  let variables = {
    authorId: requestSenderId,
    targetSemester: targetSemester,
    message: message,
  };
  for (let [key, value] of Object.entries(variables)) {
    console.log(key + " // " + value);
    if (value === undefined) {
      res.json({
        error: "The parameter '" + key + "' was not set!",
      });
      return;
    }
  }

  let roomieReq = await RoomieRequest.findOne({
    openid: user.openid,
    targetSemester: targetSemester,
  });

  let requestingUser = User.findOne({
    openid: requestSenderId,
  });

  if (requestingUser === null) {
    res.json({
      error: "Invalid user specified",
    });

    return;
  }

  Invite.deleteOne({
    requestSenderId: requestingUser.openid,
    requestTargetId: user.openid,
    requestSemester: targetSemester,
  }).then((response) => {
    res.json(response);
    //todo
    // NodeMailer.sendNotif(user, targetUser, user.name.firstName + " has requested to contact you!",
    //     `
    // Hey <b>${targetUser.name.firstName}</b>! ${user.name.firstName} ${user.name.lastName} has requested to contact you with regards to your
    // `, true)
  });
};

const acceptRequest = async (req, res, user) => {
  let requestSenderId = req.body["requestSenderId"];
  let targetSemester = req.body["targetSemester"];
  let message = req.body["message"];

  // make sure all parameters were set
  let variables = {
    authorId: requestSenderId,
    targetSemester: targetSemester,
    message: message,
  };
  for (let [key, value] of Object.entries(variables)) {
    console.log(key + " // " + value);
    if (value === undefined) {
      res.json({
        error: "The parameter '" + key + "' was not set!",
      });
      return;
    }
  }

  let roomieReq = await RoomieRequest.findOne({
    openid: user.openid,
    targetSemester: targetSemester,
  });

  let requestingUser = User.findOne({
    openid: requestSenderId,
  });

  if (requestingUser === null) {
    res.json({
      error: "Invalid user specified",
    });

    return;
  }

  Invite.deleteOne({
    requestSenderId: requestingUser.openid,
    requestTargetId: user.openid,
    requestSemester: targetSemester,
  }).then((response) => {
    res.json(response);
    //todo
    // NodeMailer.sendNotif(user, targetUser, user.name.firstName + " has requested to contact you!",
    //     `
    // Hey <b>${targetUser.name.firstName}</b>! ${user.name.firstName} ${user.name.lastName} has requested to contact you with regards to your
    // `, true)
  });
};

const myIncoming = async (req, res, user) => {
  Invite.find({
    requestTargetId: user.openid,
  }).then(async (invites) => {

    let modifiedInvites = []

    for (let invite in invites) {
      let u = await User.findOne({
        openid: invite.requestSenderId
      })
      invite = {...invite, senderUser: u}
      modifiedInvites.push(invite)
    }

    res.json(modifiedInvites);
  });
};

const myOutgoing = async (req, res, user) => {
  Invite.find({
    requestSenderId: user.openid,
  }).then(async (invites) => {

    let modifiedInvites = []

    for (let invite of invites) {
      let u = await User.findOne({
        openid: invite.requestTargetId
      })
      invite = {...invite, targetUser: u}
      modifiedInvites.push(invite)
    }

    console.log("TEST DELETE ME")
    console.log(invites)

    res.json(modifiedInvites);
  });
};

module.exports = {
  sendRequest,
  acceptRequest,
  declineRequest,
  myIncoming,
  myOutgoing,
};
