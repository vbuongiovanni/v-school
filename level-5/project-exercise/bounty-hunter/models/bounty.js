const mongoose = require("mongoose");
const {Schema, Model} = mongoose;

// create schema:
    const bountySchema = new Schema({
        firstName : {
            type : String,
            required : true
        },
        lastName : String,
        living : Boolean,
        bountyAmount : Number,
        type : {
            type : String,
            required : true,
            enum : ["jedi", "sith"]
        }
    })

// export 
module.exports = Model("Bounty", bountySchema)