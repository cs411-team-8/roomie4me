const jwt = require("jsonwebtoken");
const User = require("../models/userModel")

async function getAuthenticatedUser(req) {
    return new Promise((resolve, reject) => {
        jwt.verify(req.headers.authorization.split(' ')[1], process.env.SECRET_ENCRYPTION_KEY, async (err, decode) => {
            if (err !== undefined && err !== null) {
                reject(err)
                return
            }
            User.findOne({
                openid: decode.openid
            }).then(lu => {
                if (lu === null || lu === undefined) {
                    reject("Null or undefined user!")
                } else {
                    resolve(lu)
                }
            }).catch(err => {
                reject(err)
            });
        })
    })
}

module.exports = {getAuthenticatedUser};