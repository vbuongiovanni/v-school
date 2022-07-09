const express = require("express");
const {v4 : uuid} = require("uuid");

const app = express();

// middleware to handle parsing of json to req.body:
    app.use(express.json())

// route
    app.use("/bounty", require("./bountyRoute"))

const port = 9000;
app.listen(port, () => {console.log(`express server listening on ${port}.`)})