// Express Router - 
    // built into express library
    // enables us to modularize routes, or implement a Modular File Organization, meaning that individual files
        // perform specific tasks

const express = require("express");
const {v4 : uuid} = require("uuid");
const app = express();

// mock data
    const movies = [
        {title : "Die Hard", genre : "action", _id : uuid()},
        {title : "Star Wars", genre : "fantasy", _id : uuid()},
        {title : "Lion King", genre : "fantasy", _id : uuid()},
        {title : "Friday the 13th", genre : "horror", _id : uuid()},
    ]

    const tvShows = [
        {title : "Rick and Morty", _id : uuid()},
        {title : "Watchmen", _id : uuid()},
        {title : "Westworld", _id : uuid()},
        {title : "Friends", _id : uuid()},
    ]

// Middleware

    app.use(express.json());

// Routes
    // get
        app.get("/movies", (req, res) => {
            res.send(movies);
        })

        app.get("/tvshows", (req, res) => {
            res.send(tvShows);
        })

    // post
        app.post("/movies", (req, res) => {
            const newRecord = req.body;
            newRecord._id = uuid();
            movies.push(newRecord);
            res.send(movies);
        })

        app.post("/tvshows", (req, res) => {
            const newRecord = req.body;
            newRecord._id = uuid();
            tvShows.push(newRecord);
            res.send(tvShows);
        })


const portNumber = 9000
app.listen(portNumber, () => {console.log(`Server listening on port ${portNumber}`)})