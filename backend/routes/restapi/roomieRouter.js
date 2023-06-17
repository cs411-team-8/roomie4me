const express = require('express')
const router = express.Router()
const RoomieController = require('../../controller/roomieController')
const tokenVerifier = require("../../utils/tokenVerifier");

router.get('/requests', (req, res) => {
    tokenVerifier.getAuthenticatedUser(req).then(user => {
        RoomieController.getRequests(req, res, user).catch(err => {
            console.log(err)
            res.status(500).send("An internal error occurred.")
        })
    }).catch(err => {
        res.status(401).json({
            error: "Unauthorized request or invalid access token."
        })
    })
})

router.get('/request', (req, res) => {
    tokenVerifier.getAuthenticatedUser(req).then(user => {
        RoomieController.getRequest(req, res, user).catch(err => {
            console.log(err)
            res.status(500).send("An internal error occurred.")
        })
    }).catch(err => {
        res.status(401).json({
            error: "Unauthorized request or invalid access token."
        })
    })
})

router.put('/create', (req, res) => {
    tokenVerifier.getAuthenticatedUser(req).then(user => {
        RoomieController.createRequest(req, res, user).catch(err => {
            console.log(err)
            res.status(500).send("An internal error occurred.")
        })
    }).catch(err => {
        res.status(401).json({
            error: "Unauthorized request or invalid access token."
        })
    })
})

router.post('/update', (req, res) => {
    tokenVerifier.getAuthenticatedUser(req).then(user => {
        RoomieController.updateRequest(req, res, user).catch(err => {
            console.log(err)
            res.status(500).send("An internal error occurred.")
        })
    }).catch(err => {
        res.status(401).json({
            error: "Unauthorized request or invalid access token."
        })
    })
})

router.delete('/delete', (req, res) => {
    tokenVerifier.getAuthenticatedUser(req).then(user => {
        RoomieController.deleteRequest(req, res, user).catch(err => {
            console.log(err)
            res.status(500).send("An internal error occurred.")
        })
    }).catch(err => {
        res.status(401).json({
            error: "Unauthorized request or invalid access token."
        })
    })
})

module.exports = router