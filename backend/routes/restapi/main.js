const express = require('express')
const usersRouter = require('./user')
const roomieRouter = require('./roomie')
const router = express.Router()

router.use('/user', usersRouter)
router.use('/roomie', roomieRouter)

module.exports = router