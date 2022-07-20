const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// connect to db
mongoose.connect("mongodb://localhost:27017/bountydb", () => console.log("database connected on port 27017"))

// initialize server
const app = express();

// middleware to handle parsing of json to req.body:
    app.use(express.json());
    app.use(morgan("dev"));

// route
    app.use("/bounty", require("./bountyRoute"));

// implement middleware to handle error handing:

    app.use((err, req, res, next) => {
        console.log(err);
        res.send({errorMessage : err.message})
    })

const port = 9000;
app.listen(port, () => {console.log(`express server listening on ${port}.`)})