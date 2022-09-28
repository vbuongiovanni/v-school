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
  authorId : {
    type : Schema.Types.ObjectId,
    ref : "User",
    required: true,
  },
  author : {
    type : String,
    required: true,
  },
  votes : [{
    type : Schema.Types.ObjectId,
    ref : "Vote"
  }],
  comments : [{
    type : Schema.Types.ObjectId,
    ref : "Comment"
  }],
  createdDate : {
    type : Date,
    default : Date.now
  }
})
export default model("Issue", issueSchema);