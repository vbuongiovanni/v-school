const mongoose = require("mongoose");
const {Schema, model} = mongoose;

// 'Author' is the ONE to 'Book's MANY. Because of that, we will give the Author's ID to the Books
const bookSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    likes : {
        type : Number, 
        required : true,
        default : 0
    },
    // add the _id of 'author' property
        // Do this, add 'author'
    author : {
        // with a 'type' of Schema.Types.Object:
        type : Schema.Types.ObjectId,
        // and add a reference to the 'Author' model. 
        // Note that this is the string text declared in the model() function
        ref : "Author",
        required : true
    }
    // Impact of this? 
})

module.exports = model("Book", bookSchema);