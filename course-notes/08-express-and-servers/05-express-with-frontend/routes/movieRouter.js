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
            res.send(movies);
        })

    // get all, with query strings
        movieRouter.get("/search/genre", (req, res) => {
            const {genre} = req.query;
            const requestedMovies = movies.filter(movie => (movie.genre === genre))
            res.send(requestedMovies)
        })

    // get one - implementation of parameter
        movieRouter.get("/:movieId", (req, res) => {
            const {movieId} = req.params;
            const requestedMovie = movies.find(movie => movie._id === movieId);
            console.log(requestedMovie)
            res.send(requestedMovie)
        })

    // post one
        movieRouter.post("/", (req, res) => {
            const newRecord = req.body;
            newRecord._id = uuid();
            movies.push(newRecord);
            res.send(newRecord);
        })

    // delete
        movieRouter.delete("/:movieId", (req, res) => {
            const {movieId} = req.params;
            const movieIndex = movies.findIndex(movie => movie._id === movieId)
            movies.splice(movieIndex, 1);
            res.send(`successfully removed movie ${movieId}`)
        })

    // put
        movieRouter.put("/:movieId", (req, res) => {
            const {movieId} = req.params;
            const movieIndex = movies.findIndex(movie => movie._id === movieId)

            // merge movie
            const updatedMovie = Object.assign(movies[movieIndex], req.body) // note that Object.assign moves in place

            res.send(updatedMovie)
        })

module.exports = movieRouter;