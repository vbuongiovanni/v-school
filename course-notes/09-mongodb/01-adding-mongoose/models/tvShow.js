const mongoose = require("mongoose");
const {Schema, model} = mongoose;

// make Schema
    const tvShowSchema = new Schema({
        title : {
            type : String,
            required : true,
        },
        isReleased : Boolean
    })

// export data model:
    module.exports = model("TvShow", tvShowSchema);