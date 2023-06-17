const RoomieRequest = require('../models/roomieRequestModel')
const User = require("../models/userModel");

const createRequest = async (req, res, user) => {
    if (req.body.authorId !== user.openid) {
        res.status(401).json(
            {error: "Unauthorized! You can't create a request for another user."}
        )
        return
    }
    RoomieRequest.create(req.body).then((resp) => {
        RoomieRequest.findOne({
            authorId: req.body.authorId,
            targetSemester: req.body.targetSemester
        }).then((rr) => {
            res.json(rr)
        });
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
        openId: authorId
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
    let flagMask = req.query["active-filters"]
    // make sure all parameters were set
    let variables = {
        "page-number": page,
        "batch-size": batch,
        "sort-size": size,
        "sort-mode": sortMode,
        "active-filters": flagMask
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

    //todo: query requests here
}

module.exports = {createRequest, deleteRequest, updateRequest, getRequests, getRequest}