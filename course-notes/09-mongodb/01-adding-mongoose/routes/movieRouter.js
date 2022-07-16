const express = require("express");
const movieRouter = express.Router();
const Movie = require("../models/movie")

// Mongoose Methods: 

    // get all - Mongoose
        movieRouter.get("/", (req, res, next) => {
            // Model.find()
                // comes back with either 
                // is promised based
                    // first param is always the err
                    // second param is the found movies
            Movie.find((err, movies) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                res
                    .status(200)
                    .send(movies)
            })
        })

    // get all, with query strings
        movieRouter.get("/search/genre", (req, res, next) => {
            Movie.find({genre : req.query.genre}, (err, movies) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                res.status(200)
                res.send(movies)
            })
        })

    // get one - implementation of parameter
        movieRouter.get("/:movieId", (req, res, next) => {
            const {movieId} = req.params;
        })

    // post one
        movieRouter.post("/", (req, res, next) => {
            // the data model can also be used to instantiate new documents
                // in this case, we will instantiate the Movie using the req.body 
            const newMovie = new Movie(req.body)
            
            // to actually save the movie to the db, use .save().
                // similar to other mongoose methods, it returns an error or the newly saved object
            newMovie.save((err, savedMovie) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                res
                    .status(201)
                    .send(savedMovie)
            })
        })

    // delete
        movieRouter.delete("/:movieId", (req, res, next) => {
            const {movieId} = req.params;
            // findOneAndDelete({filterCriteria : "XYZ"}, (err, deletedItem) => {})
            Movie.findOneAndDelete({_id : movieId}, (err, deletedItem) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }
                res.status(200)
                res.send(`successfully deleted ${deletedItem.title}`)
            })

        })

    // put
        movieRouter.put("/:movieId", (req, res, next) => {
            const {movieId} = req.params;
            // .findOneAndUpdate(
                //     {filterCriteria : "XYZ"},    // filter criteria
                //     WhatToUpdateWith,            // what to update document with
                //     {configurations},            // request configurations - specifically, '{new : true}' to tell mongoose to return updated record
                //     (err, deletedItem) => {}     // callback function
            // )
            Movie.findOneAndUpdate(
                {_id : movieId},
                req.body,
                {new : true},
                (err, updatedMovie) => {
                    if (err) {
                        res.status(500)
                        return next(err)
                    }
                    res.send(updatedMovie)
                }

            )
        })

module.exports = movieRouter;