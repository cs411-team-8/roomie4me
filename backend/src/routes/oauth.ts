import express from 'express';

const UserController = require('../controller/userController')
const oAuth = require('../utils/OAuth')
const router = express.Router()

router.get('/register', (req, res) => {
    UserController.login(req, res)
        .catch((err : Error) => {
            console.log(err)
            res.status(500).send("An internal error occurred.")
        })
})

router.get('/url', (req, res) => {
    res.redirect(oAuth.getAuthorizationURL())
})

module.exports = router