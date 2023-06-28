const RoomieRequest = require("../models/roomieRequestModel");
const User = require("../models/userModel");
const Invite = require("../models/pendingInvites");
const {sendNotif} = require("../utils/nodeMailer");

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
    sendNotif(user, targetUser, user.name.firstName + " has requested to contact you!",
         `
     Hey <b>${targetUser.name.firstName}</b>! ${user.name.firstName} ${user.name.lastName} has requested to potentially room with you for your ${roomieReq.targetSemester} Roomie Request. Reply to this email to talk to them or login to <a href="https://bu.roomie4.me">Roomie4Me</a> to accept/deny their request!
     `, true)
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
    sendNotif(requestingUser, user, user.name.firstName + " has responded...!",
        `
     Dear <b>${requestingUser.name.firstName}</b>,
     It is with great pain that I have to inform you that ${user.name.firstName} has decided to deny your ${roomieReq.targetSemester} Roomie Request.
     If you need tissues to wipe your tears, you can buy some <b>ultra</b> soft Kleenex from <a href="https://www.target.com/p/kleenex-ultra-soft-3-ply-facial-tissue-60ct/-/A-12964758?store=1495&ref=tgt_adv_xsp&AFID=google&fndsrc=tgtao&DFA=71700000073296972&CPNG=PLA_Household%2BEssentials%2BShopping_Local&adgroup=SC_Household&LID=700000001230728pgs&LNM=PRODUCT_GROUP&network=o&device=c&location=&targetid=pla-4585581968016858&gclid=a11df0fe12c112bf2ca79465b5ffddf5&gclsrc=3p.ds&msclkid=a11df0fe12c112bf2ca79465b5ffddf5">Target</a (TOTALLY not sponsored or anything I swear).
     `, true)
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
    sendNotif(requestingUser, user, user.name.firstName + " has responded...!",
        `
     Dear <b>${requestingUser.name.firstName}</b>,
     I am happy to inform you that ${user.name.firstName} has decided to accept your ${roomieReq.targetSemester} Roomie Request.
     If this site has at all added value to your life, please consider <a href="/donate">donating</a>. We rely 100% on your generous donations to stay afloat!
     `, true)
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
