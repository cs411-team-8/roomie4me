const express = require('express')
const oAuthController = require('../controller/oauthController')
const User = require('../models/userModel')
const Encryptor = require('../utils/encryptor')
const router = express.Router()

router.get('/register', (req, res) => {
    let oauthCode = req.query['code']

    oAuthController.getToken(oauthCode).then(token => {
        console.log(token)
        //todo
        User.create({
            openid: token.id_token,
            oauthToken: token.access_token
        }).then(user => {
            res.cookie('gl-access-token', Encryptor.encrypt(token.access_token), {maxAge: 99999999, httpOnly: true})
            res.cookie('gl-openid', Encryptor.encrypt(token.id_token), {maxAge: 99999999, httpOnly: true})
            res.redirect('/api/v1/user/myinfo')
        })
    })

})

router.get('/url', (req, res) => {
    res.redirect(oAuthController.getAuthorizationURL())
})

module.exports = router