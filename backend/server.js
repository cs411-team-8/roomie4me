require("dotenv").config(); // load environment variables before anything

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser")
const restApiRouter = require("./routes/restapi/main")
const oAuthRouter = require("./routes/oauth")

// connect to db
console.log("Initializing database connection...");
mongoose.connect(process.env.AZURE_COSMOS_CONNECTIONSTRING);
var conn = mongoose.connection;
conn.on("error", (err) => {
  console.log(err);
});
conn.once("open", () => {
  console.log("Connected to the database!");
  status = true
});

// set json parser
app.use(express.json())
app.use(cookieParser())
// job when people send requests
app.use((req, res, next) => {
  console.log('Received a ' + req.method + ' request at ' + req.path)
  next()
})
// configure routing for the rest api
app.use("/api/v1", restApiRouter)
// configure oauth2 routing
app.use("/oauth", oAuthRouter)
// default page
app.get("/", (req, res) => {
  res.send("Hello world!\n\nIs Database Connected: " + status);
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));