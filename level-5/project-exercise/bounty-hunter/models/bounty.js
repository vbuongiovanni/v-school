const mongoose = require("mongoose");
const {Schema, model} = mongoose;

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
            enum : ["Jedi", "Sith"]
        }
    })

// export 
module.exports = model("Bounty", bountySchema)