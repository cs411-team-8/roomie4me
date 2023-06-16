const jwt = require("jsonwebtoken");
const LoggedUser = require("../models/loggedInUserModel");

async function getAuthenticatedUser(req) {
    return new Promise((resolve) => {
        jwt.verify(req.headers.authorization.split(' ')[1], process.env.SECRET_ENCRYPTION_KEY, async (err, decode) => {
            console.log(decode.openid) //todo remove
            LoggedUser.findOne({
                openid: decode.openid
            }).then(lu => {
                resolve(lu)
            });
        })
    })
}

module.exports = {getAuthenticatedUser};