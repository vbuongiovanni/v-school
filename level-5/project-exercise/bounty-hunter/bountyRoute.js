const express = require("express");
const bountyRoute = express.Router();
const Bounty = require("./models/bounty");

// routes - W/O ID param
bountyRoute.route("/")
    .get((req, res, next) => {
        Bounty.find((err, bounties) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200);
            res.send(bounties);
        })
    })
    .post((req, res, next) => {
        const newBountyData = req.body;
        const newBounty = new Bounty(newBountyData);
        newBounty.save((err, newlyAddedBounty) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(201);
            console.log(newlyAddedBounty)
            res.send(newlyAddedBounty);
        })
    })

// routes - w/ ID param
bountyRoute.route("/:requestedId")
    .get((req, res, next) => {
        const {requestedId} = req.params;
        Bounty.findOne({_id : requestedId}, (err, bounty) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.send(bounty);
        })
    })
    .delete((req, res, next) => {
        const {requestedId} = req.params;
        Bounty.findOneAndDelete({_id : requestedId}, (err, bounty) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200);
            res.send(bounty);
        })
    })
    .put((req, res, next) => {
        const {requestedId} = req.params;
        const updatedBounty = req.body;
        Bounty.findOneAndUpdate(
            {_id : requestedId}, 
            updatedBounty,
            {new : true},
            (err, bounty) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }
                res.status(200);
                res.send(bounty);
            })
    })

module.exports = bountyRoute;