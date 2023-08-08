import express from "express";
const usersRouter = require('./userRouter')
const roomieRouter = require('./roomieRouter')
const inviteRouter = require('./invitesRouter')
const router = express.Router()

// {site_url}/api/v1/user
router.use('/user', usersRouter)
// {site_url}/api/v1/roomie
router.use('/roomie', roomieRouter)
// {site_url}/api/v1/invite
router.use('/invite', inviteRouter)

module.exports = router