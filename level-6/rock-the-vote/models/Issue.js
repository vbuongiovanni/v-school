import {Schema, model} from "mongoose";
const issueSchema = new Schema({
  title : {
    type : String,
    required: true,
    lowercase: true,
    unique: true
  },
  description : {
    type : String,
    required: true,
  },
  author : {
    type : Schema.Types.ObjectId,
    ref : "User",
    required: true,
  },
  votes : {
    type : Number,
    default : 0
  },
  createdDate : {
    type : Date,
    default : Date.now
  }
})
export default model("Issue", issueSchema);