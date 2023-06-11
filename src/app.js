const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

console.log('Initializing application...')
mongoose.connect(process.env.AZURE_COSMOS_CONNECTIONSTRING)
var conn = mongoose.connection

conn.on('error', (err) => {
    console.log(err)
})

var status = false
conn.once('open', () => {
    console.log("Connected to the database!")
    status = true
})

app.get("/", (req, res) => {
    res.send("Hello world!\n\nDatabase Status: " + status)
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
