const express = require('express')
const router = express.Router()

router.get('/find', (res, req) => {
    let id = req.query.id
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