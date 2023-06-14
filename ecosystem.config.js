// This file is how Azure knows where the entry point for the node server is
// See https://learn.microsoft.com/en-us/azure/app-service/configure-language-nodejs?pivots=platform-linux#run-with-pm2 for details
module.exports = {
    apps : [{
        name   : "Roomie4Me",
        script : "./backend/server.js"
    }]
}