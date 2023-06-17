const express = require('express')
const router = express.Router()
const UserController = require('../../controller/userController')
const tokenVerifier = require('../../utils/tokenVerifier')

router.get('/myinfo', (req, res) => {
    tokenVerifier.getAuthenticatedUser(req).then(user => {
        UserController.myInfo(req, res, user).catch(err => {
            console.log(err)
            res.status(500).send("An internal error occurred.")
        })
    }).catch(err => {
        res.status(401).json({
            error: "Unauthorized request or invalid access token."
        })
    })
})

router.get('/find', (req, res) => {
    tokenVerifier.getAuthenticatedUser(req).then(user => {
        UserController.getUser(req, res, user).catch(err => {
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
        UserController.updateUser(req, res, user).catch(err => {
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
        UserController.deleteUser(req, res, user).catch(err => {
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