const express = require("express");
const {v4 : uuid} = require("uuid");

// express router allows us to break up routes using the 'router' variable:
const movieRouter = express.Router();

// mock data
    const movies = [
        {title : "Die Hard", genre : "action", _id : uuid()},
        {title : "Star Wars", genre : "fantasy", _id : uuid()},
        {title : "Lion King", genre : "fantasy", _id : uuid()},
        {title : "Friday the 13th", genre : "horror", _id : uuid()},
    ]

// Routes - Syntax 1:
    // // get
    //     // movieRouter.get("/movies", (req, res) => { // WRONG. in this case, we cannot specify the endpoint 
    //         // in express router BC endpoint is already implied in server.js app.use() method.
    //         // If this is used, then actual endpoint would become "/movies/movies"
    //     movieRouter.get("/", (req, res) => {
    //         res.send(movies);
    //     })

    // // post
    //     movieRouter.post("/", (req, res) => {
    //         const newRecord = req.body;
    //         newRecord._id = uuid();
    //         movies.push(newRecord);
    //         res.send(movies);
    //     })

// Routes - Syntax 2 - declare endpoint once, then chain requests as so:
    movieRouter.route("/")
        .get((req, res) => {
            res.send(movies);
        })
        .post((req, res) => {
            const newRecord = req.body;
            newRecord._id = uuid();
            movies.push(newRecord);
            res.send(movies);
        })

module.exports = movieRouter;