const express = require('express')
const oAuthController = require('../controller/oauthController')
const router = express.Router()

router.get('/register', (req, res) => {
    let oauthCode = req.query['code']

    oAuthController.getToken(oauthCode).then(token => {
        console.log(token)
        res.cookie('gl-access-token', token.access_token, {maxAge: 9999999, httpOnly: true})
        res.cookie('gl-openid', token.id_token, {maxAge: 9999999, httpOnly: true})
        res.redirect('/oauth/myinfo')
    })
})

router.get('/url', (req, res) => {
    res.redirect(oAuthController.getAuthorizationURL())
})

module.exports = router