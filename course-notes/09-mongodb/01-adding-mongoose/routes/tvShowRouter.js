const express = require("express");
const tvShowRouter = express.Router();
const TvShow = require("../models/tvShow");

// Routes
    // get all
    tvShowRouter.get("/", (req, res, next) => {
        TvShow.find((err, tvShows) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            res
                .status(200)
                .send(tvShows)
        })
    })

    // get one
    tvShowRouter.get("/:tvShowId", (req, res) => {
        const {tvShowId} = req.params;
    })

// post
    tvShowRouter.post("/", (req, res, next) => {
        const newRecord = req.body;
        // instantiate new tv show
        const newTvShow = new TvShow(req.body);
        
        newTvShow.save((err, newTvShow) => {
            if (err) {
                res.send(500);
                return next(err);
            }
            res.send(newTvShow);
        })

    })

// delete
    tvShowRouter.delete("/:tvShowId", (req, res, next) => {
        const {tvShowId} = req.params;
        TvShow.findByIdAndDelete({_id : tvShowId}, (err, deletedItem) => {
            if (err) {
                res.send(500)
                return next(err)
            }
            res.send(`Successfully deleted ${deletedItem.title}`)
        })
    })

// updated
    tvShowRouter.put("/:tvShowId", (req, res, next) => {
        const {tvShowId} = req.params;
        TvShow.findByIdAndUpdate(
            {_id : tvShowId},
            req.body,
            {new : true},
            (err, updatedTvShow) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }
                res.status(201)
                res.send(updatedTvShow)
            }
        )
    })

module.exports = tvShowRouter;