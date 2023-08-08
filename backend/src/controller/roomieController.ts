import { Request, Response } from 'express';
import {User, UserModel} from "../models/userModel";
import {RoomieRequest, RoomieRequestModel} from "../models/roomieRequestModel";
const NodeMailer = require("../utils/nodeMailer");

const createRequest = async (req : Request, res: Response, user: User) => {
  RoomieRequestModel.create({ ...req.body, authorId: user.openid })
    .then((resp) => {
      RoomieRequestModel.findOne({
        authorId: user.openid,
        targetSemester: req.body.targetSemester,
      }).then((rr) => {
        res.json(rr);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error:
          "An internal server error occurred. Is this a duplicate request?",
      });
    });
};

const deleteRequest = async (req : Request, res: Response, user: User) => {
  if (req.body.authorId !== user.openid) {
    res.status(401).json({
      error: "Unauthorized! You can't delete a request for another user.",
    });
    return;
  }

  RoomieRequestModel.findOne({
    authorId: req.body.authorId,
    targetSemester: req.body.targetSemester,
  }).then((rr) => {
    RoomieRequestModel.deleteOne({
      authorId: req.body.authorId,
      targetSemester: req.body.targetSemester,
    }).then((resp) => {
      res.json(rr);
    });
  });
};

const updateRequest = async (req : Request, res: Response, user: User) => {
  if (req.body.authorId !== user.openid) {
    res.status(401).json({
      error: "Unauthorized! You can't create a request for another user.",
    });
    return;
  }

  RoomieRequestModel.updateOne(
    {
      authorId: req.body.authorId,
      targetSemester: req.body.targetSemester,
    },
    req.body
  ).then((resp) => {
    RoomieRequestModel.findOne({
      authorId: req.body.authorId,
      targetSemester: req.body.targetSemester,
    }).then((rr) => {
      res.json(rr);
    });
  });
};

/**
 *
 * @param req
 * @param res
 * @param user
 * @returns {Promise<RoomieRequest>}
 */
const getRequest = async (req : Request, res: Response, user: User) => {
  let authorId = req.query["authorId"];
  let targetSemester = req.query["targetSemester"];

  // make sure all parameters were set
  let variables = {
    authorId: authorId,
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

  UserModel.findOne({
    openid: authorId,
  }).then((author) => {
    if (author?.gender !== user.gender) {
      res.status(401).json({
        error:
          "We are a conservative site so we don't let you view Roomie Requests for the opposite gender.",
      });
      return;
    }
    RoomieRequestModel.findOne({
      authorId: authorId,
      targetSemester: targetSemester,
    }).then((rr) => {
      res.json(rr);
    });
  });
};

const getMyRequests = async (req : Request, res: Response, user: User) => {
  RoomieRequestModel.find({
    authorId: user.openid,
  })
    .then((requests) => {
      res.json(requests);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "An internal server error occurred!",
      });
    });
};

/**
 *
 * @param req
 * @param res
 * @param user user getting the request - we only return requests with the same genders
 * @returns {Promise<Array>} an array of RoomieRequest
 */
const getRequests = async (req : Request, res: Response, user: User) => {
  let page = req.query["page-number"];
  let batch = req.query["batch-size"];
  let sortMode = req.query["sort-mode"];
  // make sure all parameters were set
  let variables = {
    "page-number": page,
    "batch-size": batch,
    "sort-mode": sortMode,
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

  //todo: return queried requests here
  /* todo also has issues need to be recoded
  RoomieRequestModel.find().then((requests) => {
    requests
      .filter((rr) => {
        //todo
        return true;
      })
      .sort((rr1, rr2) => {
        // sort by the last name of the creator
        if (sortMode === "alphabetic") {
        }
        // sort by time created
        else if (sortMode === "creation") {
          if (rr1.createdAt > rr2.createdAt) {
            return 1;
          } else {
            return -1;
          }
        }
        // the default personalized sorter that automatically finds the best match
        else {
          // for each room request:
          // 1. find what % match is this user to target user given their profile + preferences
          // 2. find what % match is target user to this user given their profile + preferences
          // 3. find the average of the two percentages
          // 4. now sort by this number
        }
      });
    res.json(requests);
  });

   */
};

module.exports = {
  createRequest,
  deleteRequest,
  updateRequest,
  getRequests,
  getRequest,
  getMyRequests,
};
