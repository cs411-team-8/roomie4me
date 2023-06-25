const User = require("../models/userModel");
const { google } = require("googleapis");
const jwt = require("jsonwebtoken");
const OAuth = require("../utils/OAuth");
const oAuth = require("../utils/OAuth");
const NodeMailer = require("../utils/nodeMailer");

// this is NOT a rest api route
/**
 * @route /oauth/
 */
const login = async (req, res) => {
  let oauthCode = req.query["code"]; // query oauth code
  // get token
  oAuth
    .getToken(oauthCode)
    .then(async (googleRes) => {
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
      let user = await User.findOne({
        openid: userInfo.id,
        email: userInfo.email,
      });

      // if user doesn't exist, create them
      if (user === undefined || user === null) {
        // add the user to the db because they dont exist
        await User.create({
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
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        error: "Invalid OAuth code",
      });
    });
};

const deleteUser = async (req, res, user) => {
  //todo
};

const updateUser = async (req, res, user) => {
  user.updateOne(req.body).then((resp) => {
    User.findOne({
      openid: user.openid,
      email: user.email,
    }).then((user) => {
      res.json(user);
    });
  });
};

const myInfo = async (req, res, user) => {
  res.json(user);
};

const getUser = async (req, res, user) => {
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
  User.findOne({
    openid: userid,
  }).then((user) => {
    res.json(user);
  });
};

const getUsers = async (req, res, user) => {
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

    let users = new Array()

    for (let userid in userids) {
        let user = await User.findOne({openid: userid})
        users.push(user)
    }

    res.json(users)
};

module.exports = { login, deleteUser, updateUser, getUser, getUsers, myInfo };
