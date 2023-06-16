const express = require('express')
const User = require('../models/userModel')
const Encryptor = require('../utils/encryptor')
const oAuth = require('../utils/OAuth')
const jwt = require('jsonwebtoken')
const router = express.Router()

router.get('/register', (req, res) => {
    let oauthCode = req.query['code']

    oAuth.getToken(oauthCode).then(googleRes => {
        res.cookie('gl-access-token', Encryptor.encrypt(googleRes.tokens.access_token), {maxAge: 99999999, httpOnly: true})
        res.redirect('/')
    }).catch(err => {
        console.log(err)
        res.status(400).json({
            "error": "Invalid OAuth code"
        })
    })

})

router.get('/url', (req, res) => {
    res.redirect(oAuth.getAuthorizationURL())
})

module.exports = router