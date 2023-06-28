const express = require('express')
const router = express.Router()
const UserController = require('../../controller/userController')
const tokenVerifier = require('../../utils/tokenVerifier')
const InviteController = require("../../controller/inviteController");

router.post("/send", (req, res) => {
  tokenVerifier
      .getAuthenticatedUser(req)
      .then((user) => {
        InviteController.sendRequest(req, res, user).catch((err) => {
          console.log(err);
          res.status(500).send("An internal error occurred.");
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json({
          error: "Unauthorized request or invalid access token.",
        });
      });
});

router.post("/accept", (req, res) => {
  tokenVerifier
      .getAuthenticatedUser(req)
      .then((user) => {
        InviteController.acceptRequest(req, res, user).catch((err) => {
          console.log(err);
          res.status(500).send("An internal error occurred.");
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json({
          error: "Unauthorized request or invalid access token.",
        });
      });
});

router.post("/decline", (req, res) => {
  tokenVerifier
      .getAuthenticatedUser(req)
      .then((user) => {
        InviteController.declineRequest(req, res, user).catch((err) => {
          console.log(err);
          res.status(500).send("An internal error occurred.");
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json({
          error: "Unauthorized request or invalid access token.",
        });
      });
});

router.get("/myincoming", (req, res) => {
  tokenVerifier
      .getAuthenticatedUser(req)
      .then((user) => {
        InviteController.myIncoming(req, res, user).catch((err) => {
          console.log(err);
          res.status(500).send("An internal error occurred.");
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json({
          error: "Unauthorized request or invalid access token.",
        });
      });
});

router.get("/myoutgoing", (req, res) => {
  tokenVerifier
      .getAuthenticatedUser(req)
      .then((user) => {
        InviteController.myOutgoing(req, res, user).catch((err) => {
          console.log(err);
          res.status(500).send("An internal error occurred.");
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json({
          error: "Unauthorized request or invalid access token.",
        });
      });
});

module.exports = router