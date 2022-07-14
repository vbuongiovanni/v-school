const express = require("express");
const {v4 : uuid} = require("uuid");
const bountyRoute = express.Router();
let bounties = require("./bountyData")

// routes - w/o ID param
bountyRoute.route("/")
    .get((req, res) => {
        res.send(bounties);
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(newBounty)
        console.log(newBounty)
        res.send(newBounty)
    })

// routes - w/ ID param
bountyRoute.route("/:requestedId")
    .get((req, res) => {
        const {requestedId} = req.params;
        const boundyIndex = bounties.findIndex(bounty => bounty._id === requestedId)
        res.send(bounties[boundyIndex])
    })
    .delete((req, res) => {
        const {requestedId} = req.params;
        const boundyIndex = bounties.findIndex(bounty => bounty._id === requestedId)
        bounties.splice(boundyIndex, 1)
        res.send(requestedId)
    })
    .put((req, res) => {
        const {requestedId} = req.params;
        const boundyIndex = bounties.findIndex(bounty => bounty._id === requestedId)
        const updatedBounty = {...req.body, _id : requestedId};
        Object.assign(bounties[boundyIndex], updatedBounty)
        res.send(updatedBounty)
    })

module.exports = bountyRoute;