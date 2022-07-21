const mongoose = require("mongoose");
const {Schema, model} = mongoose;

// 'Author' is the ONE to 'Book's MANY. Because of that, we will give the author's ID to the Books
const authorSchema = new Schema({
    name : {
        type : String,
        required : true
    }
});

module.exports = model("Author", authorSchema);