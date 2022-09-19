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
  issueCreatedDate : {
    type : Date,
    default : Date.now
  }
})
export default model("Issue", issueSchema);