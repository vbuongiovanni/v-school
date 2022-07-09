const express = require("express");
const {v4 : uuid} = require("uuid");

// express router allows us to break up routes using the 'router' variable:
const tvShowRouter = express.Router();

// mock data
    const tvShows = [
        {title : "Rick and Morty", _id : uuid()},
        {title : "Watchmen", _id : uuid()},
        {title : "Westworld", _id : uuid()},
        {title : "Friends", _id : uuid()},
    ]

// Routes
    // get
    // tvShowRouter.get("/tvshows", (req, res) => { // WRONG. in this case, we cannot specify the endpoint 
        // in express router BC endpoint is already implied in server.js app.use() method.
        // If this is used, then actual endpoint would become "/tvshows/tvshows"
    tvShowRouter.get("/", (req, res) => {
        res.send(tvShows);
    })

// post
    tvShowRouter.post("/", (req, res) => {
        const newRecord = req.body;
        newRecord._id = uuid();
        tvShows.push(newRecord);
        res.send(tvShows);
    })

module.exports = tvShowRouter;