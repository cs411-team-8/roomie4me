const express = require('express')
const router = express.Router()
const UserController = require('../../controller/userController')
const LoggedUser = require('../../models/loggedInUserModel')
const jwt = require("jsonwebtoken");
const tokenVerifier = require('../../utils/tokenVerifier')

router.get('/login', (req, res) => {
    UserController.getLoggedUser(req, res)
})

router.get('/find', (req, res) => {
    tokenVerifier.getAuthenticatedUser(req).then(user => {
        if (user !== undefined && user !== null) {

        } else {
            res.status(401).json({
                error: "Unauthorized request or invalid access token."
            })
        }
    })
})

router.put('/create', (res, req) => {
    tokenVerifier.getAuthenticatedUser(req).then(user => {
        if (user !== undefined && user !== null) {

        } else {
            res.status(401).json({
                error: "Unauthorized request or invalid access token."
            })
        }
    })
})

router.post('/update', (res, req) => {
    tokenVerifier.getAuthenticatedUser(req).then(user => {
        if (user !== undefined && user !== null) {

        } else {
            res.status(401).json({
                error: "Unauthorized request or invalid access token."
            })
        }
    })
})

router.delete('/delete', (res, req) => {
    tokenVerifier.getAuthenticatedUser(req).then(user => {
        if (user !== undefined && user !== null) {

        } else {
            res.status(401).json({
                error: "Unauthorized request or invalid access token."
            })
        }
    })
})

module.exports = router