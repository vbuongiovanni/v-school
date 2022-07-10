const express = require("express");
const {v4 : uuid} = require("uuid");

const bountyRoute = express.Router();

const bounties = [
    {firstName : "Luke", lastName : "Skywalker", living : true, bountyAmount : 100000, type : "Jedi", _id : uuid()},
    {firstName : "Darth", lastName : "Vader", living : true, bountyAmount : 900000, type : "Sith", _id : uuid()},
    {firstName : "Obiwan", lastName : "Kanobi", living : true, bountyAmount : 500000, type : "Jedi", _id : uuid()},
]

// routes - w/o ID param
bountyRoute.route("/")
    .get((req, res) => {
        res.send(bounties);
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(newBounty)
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
        res.send(bounties)
    })
    .put((req, res) => {
        const {requestedId} = req.params;
        const boundyIndex = bounties.findIndex(bounty => bounty._id === requestedId)
        Object.assign(bounties[boundyIndex], req.body)
        res.send(bounties)
    })

module.exports = bountyRoute;