import express from "express";
import {User, UserModel} from "../../models/userModel";
const router = express.Router();
const RoomieController = require("../../controller/roomieController");
const tokenVerifier = require("../../utils/tokenVerifier");
const UserController = require("../../controller/userController");

router.get("/myrequests", (req, res) => {
  tokenVerifier
    .getAuthenticatedUser(req)
    .then((user : User) => {
      RoomieController.getMyRequests(req, res, user).catch((err : Error) => {
        console.log(err);
        res.status(500).send("An internal error occurred.");
      });
    })
    .catch((err : Error) => {
      res.status(401).json({
        error: "Unauthorized request or invalid access token.",
      });
    });
});

router.get("/requests", (req, res) => {
  tokenVerifier
    .getAuthenticatedUser(req)
    .then((user : User) => {
      RoomieController.getRequests(req, res, user).catch((err : Error) => {
        console.log(err);
        res.status(500).send("An internal error occurred.");
      });
    })
    .catch((err : Error) => {
      res.status(401).json({
        error: "Unauthorized request or invalid access token.",
      });
    });
});

router.get("/request", (req, res) => {
  tokenVerifier
    .getAuthenticatedUser(req)
    .then((user : User) => {
      RoomieController.getRequest(req, res, user).catch((err : Error) => {
        console.log(err);
        res.status(500).send("An internal error occurred.");
      });
    })
    .catch((err : Error) => {
      res.status(401).json({
        error: "Unauthorized request or invalid access token.",
      });
    });
});

router.put("/create", (req, res) => {
  tokenVerifier
    .getAuthenticatedUser(req)
    .then((user : User) => {
      RoomieController.createRequest(req, res, user).catch((err : Error) => {
        console.log(err);
        res.status(500).send("An internal error occurred.");
      });
    })
    .catch((err : Error) => {
      res.status(401).json({
        error: "Unauthorized request or invalid access token.",
      });
    });
});

router.post("/update", (req, res) => {
  tokenVerifier
    .getAuthenticatedUser(req)
    .then((user : User) => {
      RoomieController.updateRequest(req, res, user).catch((err : Error) => {
        console.log(err);
        res.status(500).send("An internal error occurred.");
      });
    })
    .catch((err : Error) => {
      res.status(401).json({
        error: "Unauthorized request or invalid access token.",
      });
    });
});

router.delete("/delete", (req, res) => {
  tokenVerifier
    .getAuthenticatedUser(req)
    .then((user : User) => {
      RoomieController.deleteRequest(req, res, user).catch((err : Error) => {
        console.log(err);
        res.status(500).send("An internal error occurred.");
      });
    })
    .catch((err : Error) => {
      res.status(401).json({
        error: "Unauthorized request or invalid access token.",
      });
    });
});

module.exports = router;
