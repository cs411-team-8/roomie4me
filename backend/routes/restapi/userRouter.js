const express = require('express')
const router = express.Router()
const UserController = require('../../controller/userController')
const tokenVerifier = require('../../utils/tokenVerifier')

router.get('/find', (req, res) => {
    tokenVerifier.getAuthenticatedUser(req).then(user => {
        if (user !== undefined && user !== null) {
            UserController.getUser(req, res, user).catch(err => {
                console.log(err)
                res.status(500).send("An internal error occurred.")
            })
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
            UserController.updateUser(req, res, user).catch(err => {
                console.log(err)
                res.status(500).send("An internal error occurred.")
            })
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
            UserController.deleteUser(req, res, user).catch(err => {
                console.log(err)
                res.status(500).send("An internal error occurred.")
            })
        } else {
            res.status(401).json({
                error: "Unauthorized request or invalid access token."
            })
        }
    })
})

module.exports = router