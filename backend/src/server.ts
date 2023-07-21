import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from "body-parser";

dotenv.config()
const restApiRouter = require("./routes/restapi/mainRouter");
const oAuthRouter = require("./routes/oauth");
const app = express();

// connect to db
console.log("Initializing database connection...");
mongoose.connect(process.env.AZURE_COSMOS_CONNECTIONSTRING as string);
let conn = mongoose.connection;
conn.on("error", (err) => {
  console.log(err);
});
let status = false
conn.once("open", () => {
  console.log("Connected to the database!");
  status = true
});

// set json parser
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
// job when people send requests
app.use((req, res, next) => {
  console.log("Received a " + req.method + " request at " + req.path);
  next();
});
// configure routing for the rest api
app.use("/api/v1", restApiRouter);
// configure oauth2 routing
app.use("/oauth", oAuthRouter);
// default page
app.get("/", (req, res) => {
  res.send("Hello world!\n\nIs Database Connected: " + status);
});

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
