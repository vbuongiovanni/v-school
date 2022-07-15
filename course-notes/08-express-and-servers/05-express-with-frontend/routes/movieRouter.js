const express = require("express");
const {v4 : uuid} = require("uuid");

// express router allows us to break up routes using the 'router' variable:
const movieRouter = express.Router();

// mock data
    const movies = [
        {title : "Die Hard", genre : "action", _id : uuid()},
        {title : "Mission Impossible", genre : "action", _id : uuid()},
        {title : "Star Wars", genre : "fantasy", _id : uuid()},
        {title : "Lion King", genre : "fantasy", _id : uuid()},
        {title : "Friday the 13th", genre : "horror", _id : uuid()},
    ]

    // get all
        movieRouter.get("/", (req, res) => {
            res.status(200);
            res.send(movies);
        })

    // get all, with query strings
        movieRouter.get("/search/genre", (req, res) => {
            const {genre} = req.query;
            if (!genre) {
                const error = new Error("you must provide a genre");
                res.status(500);
                throw error;
            }
            const requestedMovies = movies.filter(movie => (movie.genre === genre))
            res.status(200);
            res.send(requestedMovies)
        })

    // get one - implementation of parameter
        movieRouter.get("/:movieId", (req, res, next) => {
            const {movieId} = req.params;
            const requestedMovie = movies.find(movie => movie._id === movieId);
            if (!requestedMovie) {
                const error = new Error(`Movie ID ${movieId} not found`);
                // throw error; // you can pass errors to next middleware like this (synchronous only)
                res.status(500);
                return next(error) // you can pass errors to next middleware like this (asynchronous & synchronous only)
            }
            res.status(200);
            res.send(requestedMovie)
        })

    // post one
        movieRouter.post("/", (req, res) => {
            const newRecord = req.body;
            newRecord._id = uuid();
            movies.push(newRecord);
            res.status(201);
            res.send(newRecord);
        })

    // delete
        movieRouter.delete("/:movieId", (req, res) => {
            const {movieId} = req.params;
            const movieIndex = movies.findIndex(movie => movie._id === movieId)
            movies.splice(movieIndex, 1);
            res.status(200);
            res.send(`successfully removed movie ${movieId}`)
        })

    // put
        movieRouter.put("/:movieId", (req, res) => {
            const {movieId} = req.params;
            const movieIndex = movies.findIndex(movie => movie._id === movieId)

            // merge movie
            const updatedMovie = Object.assign(movies[movieIndex], req.body) // note that Object.assign moves in place

            res
                .status(202)
                .send(updatedMovie); // these can also be chained
        })

module.exports = movieRouter;