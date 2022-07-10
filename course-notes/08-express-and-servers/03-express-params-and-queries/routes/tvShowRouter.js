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
    // get all
    tvShowRouter.get("/", (req, res) => {
        res.send(tvShows);
    })

    // get one
    tvShowRouter.get("/:tvShowId", (req, res) => {
        const {tvShowId} = req.params;
        const tvShow = tvShows.find(tvShow => tvShow._id === tvShowId);
        res.send(tvShow)
    })



// post
    tvShowRouter.post("/", (req, res) => {
        const newRecord = req.body;
        newRecord._id = uuid();
        tvShows.push(newRecord);
        res.send(tvShows);
    })

module.exports = tvShowRouter;