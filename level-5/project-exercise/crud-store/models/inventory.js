const mongoose = require("mongoose")
const {Schema, model} = mongoose;

const InventorySchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    prodDescription : String,
    price : {
        type : Number,
        required : true
    },
    inStock : {
        type : Boolean,
        required : true
    }
})

module.exports = model("InventoryModel", InventorySchema)