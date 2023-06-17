const jwt = require("jsonwebtoken");

async function getAuthenticatedUser(req) {
    return new Promise((resolve) => {
        jwt.verify(req.headers.authorization.split(' ')[1], process.env.SECRET_ENCRYPTION_KEY, async (err, decode) => {
            User.findOne({
                openid: decode.openid
            }).then(lu => {
                resolve(lu)
            });
        })
    })
}

module.exports = {getAuthenticatedUser};