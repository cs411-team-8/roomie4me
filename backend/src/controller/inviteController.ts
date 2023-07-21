import {RoomieRequest, RoomieRequestModel} from '../models/roomieRequestModel'
import {User, UserModel} from '../models/userModel'
import {PendingInviteModel, PendingInvite} from "../models/pendingInvitesModel"
import { Request, Response } from 'express';
const { sendNotif } = require("../utils/nodeMailer");

const sendRequest = async (req : Request, res : Response, user: User) => {
  const body = req.body as any;
  let requestTargetId = body["requestTargetId"];
  let targetSemester = body["targetSemester"];
  let message = body["message"];

  // make sure all parameters were set
  let variables = {
    requestTargetId: requestTargetId,
    targetSemester: targetSemester,
  };
  for (let [key, value] of Object.entries(variables)) {
    console.log(key + " // " + value);
    if (value === undefined) {
      // @ts-ignore
      await res.json({
        error: "The parameter '" + key + "' was not set!",
      });
      return;
    }
  }

  let roomieReq = await RoomieRequestModel.findOne({
    openid: requestTargetId,
    targetSemester: targetSemester,
  });

  let targetUser = await UserModel.findOne({
    openid: requestTargetId,
  });

  if (targetUser === undefined || targetUser === null || targetUser.gender !== user.gender) {
    // @ts-ignore
    await res.json({
      error: "Invalid target user!",
    });
    return;
  }

  if (targetUser.openid === user.openid) {
    // @ts-ignore
    res.json({
      error: "You can't send a request to yourself!",
    });

    return;
  }

  if (targetSemester) {
    //todo: validate target semester too in future?
  }

  PendingInviteModel.create({
    requestSenderId: user.openid,
    requestTargetId: requestTargetId,
    requestSemester: targetSemester,
    message: message,
  }).then((invite) => {
    // @ts-ignore
    res.json(invite);

    sendNotif(
      user,
      targetUser,
      user.name?.firstName + " has requested to contact you!",
      `
     Hey <b>${targetUser?.name?.firstName}</b>! ${user.name?.firstName} ${user.name?.lastName} has requested to potentially room with you for your Roomie Request. Reply to this email to talk to them or login to <a href="https://bu.roomie4.me">Roomie4Me</a> to accept/deny their request!
     `,
      true
    );
  });
};

const declineRequest = async (req: Request, res: Response, user: User) => {
  const body = req.body as any;
  let requestSenderId = body["requestSenderId"];
  let targetSemester = body["targetSemester"];
  let message = body["message"];

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

  let roomieReq = await RoomieRequestModel.findOne({
    openid: user.openid,
    targetSemester: targetSemester,
  });

  let requestingUser = UserModel.findOne({
    openid: requestSenderId,
  });

  if (requestingUser === null) {
    res.json({
      error: "Invalid user specified",
    });

    return;
  }

  PendingInviteModel.deleteOne({
    requestSenderId: requestingUser.openid,
    requestTargetId: user.openid,
    requestSemester: targetSemester,
  }).then((response) => {
    res.json(response);
    sendNotif(
      requestingUser,
      user,
      user.name?.firstName + " has responded...!",
      `
     Dear <b>${requestingUser.name.firstName}</b>,
     It is with great pain that I have to inform you that ${user.name?.firstName} has decided to deny your ${roomieReq?.targetSemester} Roomie Request.
     If you need tissues to wipe your tears, you can buy some <b>ultra</b> soft Kleenex from <a href="https://www.target.com/p/kleenex-ultra-soft-3-ply-facial-tissue-60ct/-/A-12964758?store=1495&ref=tgt_adv_xsp&AFID=google&fndsrc=tgtao&DFA=71700000073296972&CPNG=PLA_Household%2BEssentials%2BShopping_Local&adgroup=SC_Household&LID=700000001230728pgs&LNM=PRODUCT_GROUP&network=o&device=c&location=&targetid=pla-4585581968016858&gclid=a11df0fe12c112bf2ca79465b5ffddf5&gclsrc=3p.ds&msclkid=a11df0fe12c112bf2ca79465b5ffddf5">Target</a (TOTALLY not sponsored or anything I swear).
     `,
      true
    );
  });
};

const acceptRequest = async (req: Request, res: Response, user: User) => {
  const body = req.body as any;
  let requestSenderId = body["requestSenderId"];
  let targetSemester = body["targetSemester"];
  let message = body["message"];

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

  let roomieReq = await RoomieRequestModel.findOne({
    openid: user.openid,
    targetSemester: targetSemester,
  });

  let requestingUser = UserModel.findOne({
    openid: requestSenderId,
  });

  if (requestingUser === null) {
    await res.json({
      error: "Invalid user specified",
    });

    return;
  }

  PendingInviteModel.deleteOne({
    requestSenderId: requestingUser.openid,
    requestTargetId: user.openid,
    requestSemester: targetSemester,
  }).then((response) => {
    res.json(response);
    sendNotif(
      requestingUser,
      user,
      user.name?.firstName + " has responded...!",
      `
     Dear <b>${requestingUser.name.firstName}</b>,
     I am happy to inform you that ${user.name?.firstName} has decided to accept your ${roomieReq?.targetSemester} Roomie Request.
     If this site has at all added value to your life, please consider <a href="/donate">donating</a>. We rely 100% on your generous donations to stay afloat!
     `,
      true
    );
  });
};

const myIncoming = async (req: Request, res: Response, user: User) => {
  PendingInviteModel.find({
    requestTargetId: user.openid,
  }).then(async (invites : PendingInvite[]) => {
    let modifiedInvites = [];

    for (let invite of invites) {
      let u = await UserModel.findOne({
        openid: invite.requestSenderId,
      });
      let modifiedInvite = { ...invite, senderUser: u };
      modifiedInvites.push(modifiedInvite);
    }

    res.json(modifiedInvites);
  });
};

const myOutgoing = async (req: Request, res: Response, user: User) => {
  PendingInviteModel.find({
    requestSenderId: user.openid,
  }).then(async (invites : PendingInvite[]) => {
    let modifiedInvites = [];

    for (let invite of invites) {
      let u = await UserModel.findOne({
        openid: invite.requestTargetId,
      });
      let modifiedInvite = { ...invite, targetUser: u };
      modifiedInvites.push(modifiedInvite);
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
