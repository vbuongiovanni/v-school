import {Schema, model} from "mongoose";
const userSchema = new Schema({
  username : {
    type : String,
    required: true,
    lowercase: true,
    unique: true
  },
  password : {
    type : String,
    required: true,
  },
  userCreatedDate : {
    type : Date,
    default : Date.now
  },
  isAdmin : {
    type : Boolean,
    default: false
  }
})
export default model("User", userSchema);