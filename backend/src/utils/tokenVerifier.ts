import {User, UserModel} from "../models/userModel";
import jwt from 'jsonwebtoken';
import {Request} from 'express';

interface DecodedToken {
    openid: string;
}
async function getAuthenticatedUser(req : Request) : Promise<User> {
    return new Promise((resolve, reject) => {
        jwt.verify(req.headers.authorization?.split(' ')[1] as string, process.env.SECRET_ENCRYPTION_KEY as string, async (err, decode) => {
            if (err !== undefined && err !== null) {
                reject(err)
                return
            }
            const decodedToken = decode as DecodedToken;
            UserModel.findOne({
                openid: decodedToken.openid
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