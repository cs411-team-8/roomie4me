// This file is how Azure knows where the entry point for the node server is
module.exports = {
    apps : [{
        name   : "Roomie4Me",
        script : "./backend/server.js"
    }]
}