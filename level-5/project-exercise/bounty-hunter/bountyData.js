const {v4 : uuid} = require("uuid");

const bounties = [
    {firstName : "Yoda", lastName : "", living : true, bountyAmount : 1000000, type : "Jedi", _id : uuid()},
    {firstName : "Emporer Palpatine", lastName : "", living : true, bountyAmount : 400000, type : "Sith", _id : uuid()},
    {firstName : "Mace", lastName : "Windu", living : true, bountyAmount : 5000, type : "Jedi", _id : uuid()},
    {firstName : "Luke", lastName : "Skywalker", living : true, bountyAmount : 100000, type : "Jedi", _id : uuid()},
    {firstName : "Darth", lastName : "Vader", living : true, bountyAmount : 900000, type : "Sith", _id : uuid()},
    {firstName : "Obiwan", lastName : "Kanobi", living : true, bountyAmount : 500000, type : "Jedi", _id : uuid()},
]

module.exports = bounties;