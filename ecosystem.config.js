// Called by run.sh to start the node server
// See https://learn.microsoft.com/en-us/azure/app-service/configure-language-nodejs?pivots=platform-linux#run-with-pm2 for details
module.exports = {
    apps : [
        {
            name: "Roomie4Me Backend",
            cwd: "/site/wwwroot/frontend",
            script: "npm run start"
        },
        {
            name: "Roomie4Me Frontend",
            cwd: "/site/wwwroot/backend",
            script : "npm run start"
        }
    ]
}