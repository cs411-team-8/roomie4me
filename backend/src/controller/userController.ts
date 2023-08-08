import {Response, Request} from 'express';
import {UserModel, User} from '../models/userModel'
import * as auth from 'google-auth-library'
import {GetTokenResponse} from "google-auth-library/build/src/auth/oauth2client";
import {RoomieRequestModel} from "../models/roomieRequestModel";
const RoomieRequest = require('../models/roomieRequestModel')
const UserMatchData = require("../models/userMatchDataModel")
const { google } = require("googleapis");
const jwt = require("jsonwebtoken");
const OAuth = require("../utils/OAuth");
const oAuth = require("../utils/OAuth");
const MatchCalculator = require("../utils/matchCalculator")
const NodeMailer = require("../utils/nodeMailer");

// this is NOT a rest api route
/**
 * @route /oauth/
 */
const login = async (req: Request, res: Response) => {
  let oauthCode = req.query["code"]; // query oauth code
  // get token
  oAuth
    .getToken(oauthCode as string)
    .then(async (googleRes : GetTokenResponse) => {
      // now get their access token
      let token = googleRes.tokens.access_token;

      // query google api to get data about this user
      const oauth2Client = OAuth.getNewOAuthClient();
      oauth2Client.setCredentials({ access_token: token });
      const oauth2 = google.oauth2({
        version: "v2",
        auth: oauth2Client,
      });
      const userInfo = (await oauth2.userinfo.get()).data;

      // now first check if this user already exists before creating a new account
      let user = await UserModel.findOne({
        openid: userInfo.id,
        email: userInfo.email,
      });

      // if user doesn't exist, create them
      if (user === undefined || user === null) {
        // add the user to the db because they dont exist
        await UserModel.create({
          openid: userInfo.id,
          name: {
            firstName: userInfo.given_name,
            lastName: userInfo.family_name,
          },
          email: userInfo.email,
          registered: false,
        });
      }

      // generate the api token to send back to the user to be saved as a cookie
      // (expires in 1 month)
      let apiToken = jwt.sign(
        {
          openid: userInfo.id,
        },
        process.env.SECRET_ENCRYPTION_KEY,
        {
          expiresIn: 2592000000,
        }
      );

      // set cookie
      res.cookie("access-token", apiToken, {
        maxAge: 2592000000,
        httpOnly: false,
      });

      // redirect the user back to the main page
      res.redirect("http://localhost:3000/"); //todo: make abstract url
    })
    .catch((err : Error) => {
      console.log(err);
      res.status(400).json({
        error: "Invalid OAuth code",
      });
    });
};

const deleteUser = async (req : Request, res: Response, user: User) => {
  //todo delete user
    // todo also delete match rating
};

const updateUser = async (req : Request, res: Response, user: User) => {
  UserModel.updateOne(req.body).then((resp) => {
    UserModel.findOne({
      openid: user.openid,
      email: user.email,
    }).then((user) => {
      res.json(user);
    });
  });

  // now on the backend also update database match ratings
  // for everyone the same gender
  /* todo: this is a mess and needs to be recoded
  UserModel.find({gender: user.gender}).then(users => {
    RoomieRequestModel.find({authorId: user.openid}).then(roomieReqs => {
      for (let roomieReq of roomieReqs) {
        // user -> aUser
        UserMatchData.findByIdAndUpdate({
          from: user.openid,
          to: aUser.openid
        }, {
          matchRating: MatchCalculator.calcMatch(user, aUser, roomieReq.preferences)
        }, {
          upsert: true
        })
      }
    })
    for (let aUser in users) {
      RoomieRequest.find({authorId: aUser.openid}).then(roomieReq => {
        // aUser -> user
        UserMatchData.findByIdAndUpdate({
          from: aUser.openid,
          to: user.openid
        }, {
          matchRating: MatchCalculator.calcMatch(aUser, user, aUser.preferences)
        }, {
          upsert: true
        })
      })
    }
  },)

   */

};

const myInfo = async (req : Request, res: Response, user: User) => {
  res.json(user);
};

const getUser = async (req : Request, res: Response, user: User) => {
  let userid = req.query["userid"];
  let variables = {
    userid: userid,
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
  UserModel.findOne({
    openid: userid,
  }).then((user) => {
    res.json(user);
  });
};

const getUsers = async (req : Request, res: Response, user: User) => {
  let userids = req.body["userids"];
  let variables = {
    userids: userids,
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

  let users : User[] = []

  for (let userid of userids) {
    let user = await UserModel.findOne({ openid: userid });
    users.push(user as User);
  }

  res.json(users);
};

module.exports = { login, deleteUser, updateUser, getUser, getUsers, myInfo };
