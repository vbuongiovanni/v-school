import {Schema, model} from "mongoose";
const commentSchema = new Schema({
  text : {
    type : String,
    required: true
  },
  level : {
    type : Number,
    default : 0
  },
  rootCommentId : {
    type : Schema.Types.ObjectId,
    ref : "Comment",
  },
  commenter : {
    type : String,
    required: true,
  },
  issueId : {
    type : Schema.Types.ObjectId,
    ref : "Issue",
    required: true,
  },
  commentCreatedDate : {
    type : Date,
    default : Date.now
  }
})
export default model("Comment", commentSchema);