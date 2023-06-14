const express = require('express')
const router = express.Router()

router.get('/requests', (req, res) => {
    let page = req.query["page-number"]
    let batch = req.query["batch-size"]
    let size = req.query["sort-size"]
    let sortMode = req.query["sort-mode"]
    let flagMask = req.query["active-filters"]
    // make sure all parameters were set
    let variables = {
        "page-number": page,
        "batch-size": batch,
        "sort-size": size,
        "sort-mode": sortMode,
        "active-filters": flagMask
    }
    for (let [key, value] of Object.entries(variables)) {
        console.log(key + " // " + value)
        if (value === undefined) {
            res.send("TODO: error, the parameter '" + key + "' was not set!")
            return
        }
    }
    // handle request
    res.send("TODO: get all requests for: " + page + " // " + batch + "//" + size + "//" + sortMode + "//" + flagMask)
})

router.get('/request', (req, res) => {
    let id = req.query["id"]
    // validate parameters
    if (id === undefined) {
        res.send("TODO: error, the parameter 'id' was not set!")
        return
    }
    res.send("TODO: get specific requests for " + id)
})

router.put('/create', (req, res) => {
    res.send("TODO: create a roomie requests")
})

router.post('/update', (req, res) => {
    res.send("TODO: update a roomie requests")
})

router.delete('/delete', (req, res) => {
    res.send("TODO: delete a roomie request")
})

module.exports = router