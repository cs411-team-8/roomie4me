const express = require('express')
const router = express.Router()
const User = require('../../models/userModel')
const Encryptor = require('../../utils/encryptor')
const oAuthController = require("../../controller/oauthController");

//todo: figure out a way to authenticate user for api
router.get('/myinfo', (req, res) => {
    let token = req.cookies['gl-access-token']
    let openid = req.cookies['gl-openid']
    if (token === undefined || openid === undefined) {
        res.redirect('/oauth/url')
    }
    else {
        token = Encryptor.decrypt(token)
        openid = Encryptor.decrypt(openid)
        oAuthController.getUser({access_token: token, id_token: openid})
            .then(user => {
                res.json(user)
            }).catch(err => {
            console.log(err)
            res.redirect('/oauth/url')
        })
    }
})

router.get('/find', (req, res) => {
    let id = req.query["id"]
    // validate parameters
    if (id === undefined) {
        res.send("TODO: error, the parameter 'id' was not set!")
        return
    }
    res.send("TODO: find a specific user given their id=" + id)
})

router.put('/create', (res, req) => {
    res.send("TODO: create a user")
})

router.post('/update', (res, req) => {
    res.send("TODO: update an existing user")
})

router.delete('/delete', (res, req) => {
    res.send("TODO: delete a user (delete account)")
})

module.exports = router