const express = require("express");
const mongoose = require("mongoose");
const app = express();
const restApi = require("./routes/restapi/main")
require("dotenv").config(); // load environment variables

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

// configure routing for the rest api
app.use("/api/v1", restApi)

app.get("/", (req, res) => {
  res.send("Hello world!\n\nDatabase Status: " + status);
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
