const express = require('express')
const router = express.Router()
const RoomieRequest = require('../../models/roomieRequestModel')
const RoomieController = require('../../controller/roomieController')
const tokenVerifier = require("../../utils/tokenVerifier");

router.get('/requests', (req, res) => {
    tokenVerifier.getAuthenticatedUser(req).then(user => {
        if (user !== undefined && user !== null) {
            RoomieController.getRequests(req, res, user)
        } else {
            res.status(401).json({
                error: "Unauthorized request or invalid access token."
            })
        }
    })
})

router.get('/request', (req, res) => {
    tokenVerifier.getAuthenticatedUser(req).then(user => {
        if (user !== undefined && user !== null) {
            RoomieController.getRequest(req, res, user)
        } else {
            res.status(401).json({
                error: "Unauthorized request or invalid access token."
            })
        }
    })
})

router.put('/create', (req, res) => {
    tokenVerifier.getAuthenticatedUser(req).then(user => {
        if (user !== undefined && user !== null) {
            RoomieController.createRequest(req, res, user)
        } else {
            res.status(401).json({
                error: "Unauthorized request or invalid access token."
            })
        }
    })
})

router.post('/update', (req, res) => {
    tokenVerifier.getAuthenticatedUser(req).then(user => {
        if (user !== undefined && user !== null) {
            RoomieController.updateRequest(req, res, user)
        } else {
            res.status(401).json({
                error: "Unauthorized request or invalid access token."
            })
        }
    })
})

router.delete('/delete', (req, res) => {
    tokenVerifier.getAuthenticatedUser(req).then(user => {
        if (user !== undefined && user !== null) {
            RoomieController.deleteRequest(req, res, user)
        } else {
            res.status(401).json({
                error: "Unauthorized request or invalid access token."
            })
        }
    })
})

module.exports = router