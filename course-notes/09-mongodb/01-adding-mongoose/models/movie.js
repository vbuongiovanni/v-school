const mongoose = require("mongoose");
const {Schema} = mongoose;

// Making schemas:
    // what is a schema? basically, a blue print for data.
    // each schema is associated with a mongoDB collection.
    // The schema is essentially a constructor of how each document in the collection will look.
    // note that models are typically defined before Routes

    const movieSchema = new Schema({
        title : { // can be defined as a object to allow for customization/configuration (see docs for additional details)
            type : String,
            required : true
        },
        genre : String, // or as a simple class, if you only want to specify the type
        releaseYear : Number,
        isReleased : {
            type : Boolean,
            required : true
        },
    })

// Export Model
    // making a Data Model from a schema:
        // a schema is merely a blueprint, so you can't do anything with it.. except make a Data Model
        // A Data Model has a Name and a corresponding Blueprint (e.g., a schema)
        // a data model will allow us to perform all CRUD operations from within Node:
    module.exports = mongoose.model("Movie", movieSchema)