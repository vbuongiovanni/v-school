import {Schema, model} from "mongoose";
const voteSchema = new Schema({
  voterId : {
    type : Schema.Types.ObjectId,
    ref : "User",
    required: true,
  },
  issueId : {
    type : Schema.Types.ObjectId,
    ref : "Issue",
    required: true,
  },
  voteValue : {
    type : Number,
    min : -1,
    max : 1
  }
})
export default model("Vote", voteSchema);