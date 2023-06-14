const express = require('express')
const usersRouter = require('./user')
const roomieRouter = require('./roomie')
const router = express.Router()

// {site_url}/api/v1/user
router.use('/user', usersRouter)
// {site_url}/api/v1/roomie
router.use('/roomie', roomieRouter)

module.exports = router