const RoomieRequest = require('../models/roomieRequestModel')
const User = require("../models/userModel");
const NodeMailer = require("../utils/nodeMailer");

const createRequest = async (req, res, user) => {
    RoomieRequest.create(req.body).then((resp) => {
        RoomieRequest.findOne({
            authorId: user.openid,
            targetSemester: req.body.targetSemester
        }).then((rr) => {
            res.json(rr)
        });
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            error: "An internal server error occurred. Is this a duplicate request?"
        })
    });
}

const deleteRequest = async (req, res, user) => {
    if (req.body.authorId !== user.openid) {
        res.status(401).json(
            {error: "Unauthorized! You can't delete a request for another user."}
        )
        return
    }

    RoomieRequest.findOne({
        authorId: req.body.authorId,
        targetSemester: req.body.targetSemester
    }).then(rr => {
        RoomieRequest.deleteOne({
            authorId: req.body.authorId,
            targetSemester: req.body.targetSemester
        }).then(resp => {
            res.json(rr)
        })
    })
}

const updateRequest = async (req, res, user) => {
    if (req.body.authorId !== user.openid) {
        res.status(401).json(
            {error: "Unauthorized! You can't create a request for another user."}
        )
        return
    }

    RoomieRequest.updateOne({
        authorId: req.body.authorId,
        targetSemester: req.body.targetSemester
    }, req.body).then(resp => {
        RoomieRequest.findOne({
            authorId: req.body.authorId,
            targetSemester: req.body.targetSemester
        }).then(rr => {
            res.json(rr)
        })
    })
}

/**
 *
 * @param req
 * @param res
 * @param user
 * @returns {Promise<RoomieRequest>}
 */
const getRequest = async (req, res, user) => {
    let authorId = req.query["authorId"]
    let targetSemester = req.query["targetSemester"]

    // make sure all parameters were set
    let variables = {
        "authorId": authorId,
        "targetSemester": targetSemester
    }
    for (let [key, value] of Object.entries(variables)) {
        console.log(key + " // " + value)
        if (value === undefined) {
            res.json({
                error: "The parameter '" + key + "' was not set!"
            })
            return
        }
    }

    User.findOne({
        openid: authorId
    }).then(author => {
        if (author.gender !== user.gender) {
            res.status(401).json({
                "error": "We are a conservative site so we don't let you view Roomie Requests for the opposite gender."
            })
            return
        }
        RoomieRequest.findOne({
            authorId: authorId,
            targetSemester: targetSemester
        }).then(rr => {
            res.json(rr)
        })
    })

}

const getMyRequests = async (req, res, user) => {
    RoomieRequest.find({
        authorId: user.openid
    }).then(requests => {
        res.json(requests)
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            error: "An internal server error occurred!"
        })
    })
}

/**
 *
 * @param req
 * @param res
 * @param user user getting the request - we only return requests with the same genders
 * @returns {Promise<Array>} an array of RoomieRequest
 */
const getRequests = async (req, res, user) => {
    let page = req.query["page-number"]
    let batch = req.query["batch-size"]
    let size = req.query["sort-size"]
    let sortMode = req.query["sort-mode"]
    // make sure all parameters were set
    let variables = {
        "page-number": page,
        "batch-size": batch,
        "sort-size": size,
        "sort-mode": sortMode
    }
    for (let [key, value] of Object.entries(variables)) {
        console.log(key + " // " + value)
        if (value === undefined) {
            res.json({
                error: "The parameter '" + key + "' was not set!"
            })
            return
        }
    }

    //todo: return queried requests here
    RoomieRequest.find().then(requests => {
        requests.filter(rr => {
            //todo
        }).sort((rr1, rr2) => {
            // sort by the last name of the creator
            if (sortMode === 'alphabetic') {

            }
            // sort by time created
            else if (sortMode === 'creation') {

            }
            // the default personalized sorter that automatically finds the best match
            else {
                // for each room request:
                // 1. find what % match is this user to target user given their profile + preferences
                // 2. find what % match is target user to this user given their profile + preferences
                // 3. find the average of the two percentages
                // 4. now sort by this number
            }
        })
    })
}

const contactRequest = async (req, res, user) => {
    let authorId = req.body["authorId"]
    let targetSemester = req.body["targetSemester"]
    let message = req.body["message"]

    // make sure all parameters were set
    let variables = {
        "authorId": authorId,
        "targetSemester": targetSemester,
        "message": message
    }
    for (let [key, value] of Object.entries(variables)) {
        console.log(key + " // " + value)
        if (value === undefined) {
            res.json({
                error: "The parameter '" + key + "' was not set!"
            })
            return
        }
    }

    RoomieRequest.findOne({
        openid: authorId,
        targetSemester: targetSemester
    }).then(rr => {
        User.findOne({
            openid: authorId
        }).then(targetUser => {
            //todo
            // NodeMailer.sendNotif(user, targetUser, user.name.firstName + " has requested to contact you!",
            //     `
            // Hey <b>${targetUser.name.firstName}</b>! ${user.name.firstName} ${user.name.lastName} has requested to contact you with regards to your
            // `, true)
        })
    })


}

module.exports = {createRequest, deleteRequest, updateRequest, getRequests, getRequest, contactRequest}