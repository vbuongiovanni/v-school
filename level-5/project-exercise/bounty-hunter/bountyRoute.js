const express = require("express");
const {v4 : uuid} = require("uuid");

const bountyRoute = express.Router();

const bounties = [
    {firstName : "Luke", lastName : "Skywalker", Living : true, bountyAmount : 100000, type : "Jedi", _id : uuid()},
    {firstName : "Darth", lastName : "Vader", Living : true, bountyAmount : 900000, type : "Sith", _id : uuid()},
    {firstName : "Obiwan", lastName : "Kanobi", Living : true, bountyAmount : 500000, type : "Jedi", _id : uuid()},
]

// routes
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

module.exports = bountyRoute;