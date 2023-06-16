const RoomieRequest = require('../models/roomieRequestModel')

const createRequest = async (req, res, user) => {

}

const deleteRequest = async (req, res, user) => {

}

const updateRequest = async (req, res, user) => {

}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<RoomieRequest>}
 */
const getRequest = async (req, res, user) => {

}

/**
 *
 * @param req
 * @param res
 * @param user user getting the request - we only return requests with the same genders
 * @returns {Promise<Array>} an array of RoomieRequest
 */
const getRequests = async (req, res, user) => {
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
}

module.exports = {createRequest, deleteRequest, updateRequest, getRequests, getRequest}