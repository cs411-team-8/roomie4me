const User = require('../models/userModel')
const {google} = require("googleapis");
const jwt = require("jsonwebtoken");
const OAuth = require('../utils/OAuth')
const Encryptor = require("../utils/encryptor");
const LoggedInUser = require('../models/loggedInUserModel')

const createUser = async (req, res, user) => {

}

const deleteUser = async (req, res, user) => {

}

const updateUser = async (req, res, user) => {

}

const getUser = async (req, res, user) => {

}


//todo: ensure data integrity and stop duplicates
const getLoggedUser = async (req, res) => {

    // in order to get the api tokens and "login", the user must supply an access token
    // we gave them when they did oAuth we check for the token here

    // check if the token exists
    let token = req.body['gl-access-token']
    if (token === undefined) {
        res.status(400).json({
            error: "Invalid request. OAuth access token not provided."
        })
    }

    try {
        // decrypt the access token (user has the encrypted version)
        token = Encryptor.decrypt(token)

        // now attempt login by first checking the database to see if someone with the oAuth access token exists..
        let loggedUser = (await LoggedInUser.findOne({
            oauthToken: token
        }))
        if (loggedUser !== null && loggedUser !== undefined) {
            loggedUser = await loggedUser.populate('user')
        }
        // if the user doesnt exist in the db, then maybe he just registered
        // so lets check google
        else {
            const oauth2Client = OAuth.getNewOAuthClient()

            oauth2Client.setCredentials({access_token: token})
            const oauth2 = google.oauth2({
                version: 'v2',
                auth: oauth2Client
            })

            const userInfo = (await oauth2.userinfo.get()).data

            // add the user to the db
            loggedUser = await User.create({
                name: {
                    firstName: userInfo.given_name,
                    lastName: userInfo.family_name
                },
                email: userInfo.email,
                registered: false
            })
            loggedUser = (await LoggedInUser.create({
                user: loggedUser,
                openid: userInfo.id,
                oauthToken: token
            }))

        }

        // generate the api token to send back to the user
        let apiToken = jwt.sign({
            openid: loggedUser.openid
        }, process.env.SECRET_ENCRYPTION_KEY, {
            expiresIn: 86400
        })

        // converts loggedUser into a plain object with out all the mongoose bs
        // this is so I can just directly send the user object
        loggedUser = JSON.parse(JSON.stringify(loggedUser))

        // return api token and also the user's details
        res.status(200).json(
            { user: loggedUser.user, apiToken: apiToken }
        )

    } catch (err) {
        console.log(err)
        res.status(400).json({
            error: "Invalid or expired OAuth access token provided."
        })
    }

}

module.exports = {createUser, deleteUser, updateUser, getUser, getLoggedUser}