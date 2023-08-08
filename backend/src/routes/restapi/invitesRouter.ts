import express from "express";
import {User, UserModel} from "../../models/userModel";
const tokenVerifier = require('../../utils/tokenVerifier')
const InviteController = require("../../controller/inviteController");
const router = express.Router()

router.post("/send", (req, res) => {
  tokenVerifier
      .getAuthenticatedUser(req)
      .then((user: User) => {
        InviteController.sendRequest(req, res, user).catch((err : Error) => {
          console.log(err);
          res.status(500).send("An internal error occurred.");
        });
      })
      .catch((err : Error) => {
        console.log(err);
        res.status(401).json({
          error: "Unauthorized request or invalid access token.",
        });
      });
});

router.post("/accept", (req, res) => {
  tokenVerifier
      .getAuthenticatedUser(req)
      .then((user : User) => {
        InviteController.acceptRequest(req, res, user).catch((err : Error) => {
          console.log(err);
          res.status(500).send("An internal error occurred.");
        });
      })
      .catch((err : Error) => {
        console.log(err);
        res.status(401).json({
          error: "Unauthorized request or invalid access token.",
        });
      });
});

router.post("/decline", (req, res) => {
  tokenVerifier
      .getAuthenticatedUser(req)
      .then((user : User) => {
        InviteController.declineRequest(req, res, user).catch((err : Error) => {
          console.log(err);
          res.status(500).send("An internal error occurred.");
        });
      })
      .catch((err : Error) => {
        console.log(err);
        res.status(401).json({
          error: "Unauthorized request or invalid access token.",
        });
      });
});

router.get("/myincoming", (req, res) => {
  tokenVerifier
      .getAuthenticatedUser(req)
      .then((user : User) => {
        InviteController.myIncoming(req, res, user).catch((err : Error) => {
          console.log(err);
          res.status(500).send("An internal error occurred.");
        });
      })
      .catch((err : Error) => {
        console.log(err);
        res.status(401).json({
          error: "Unauthorized request or invalid access token.",
        });
      });
});

router.get("/myoutgoing", (req, res) => {
  tokenVerifier
      .getAuthenticatedUser(req)
      .then((user : User) => {
        InviteController.myOutgoing(req, res, user).catch((err : Error) => {
          console.log(err);
          res.status(500).send("An internal error occurred.");
        });
      })
      .catch((err : Error) => {
        console.log(err);
        res.status(401).json({
          error: "Unauthorized request or invalid access token.",
        });
      });
});

module.exports = router