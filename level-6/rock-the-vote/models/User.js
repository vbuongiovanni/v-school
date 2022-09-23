import {Schema, model} from "mongoose";
import bcrypt from "bcrypt";

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
});
// implement presave hook
  userSchema.pre("save", function(next) {
    const user = this;
    if (!user.isModified("password")) {
      return next();
    }
    bcrypt.hash(user.password, 10, (err, hashPassword) => {
      if (err) {
        return next(err);
      }
      user.password = hashPassword;
      next();
    })
  });
// implement method to check hashed password
  userSchema.methods.evalPasswords = function(passwordAttempt, callback) {
    const user = this;
    bcrypt.compare(passwordAttempt, user.password, (err, isMatch) => {
      if (err) {
        return callback(null);
      }
      return callback(null, isMatch);
    });
  };

// implement method to remove password from user object
  userSchema.methods.removePassword = function() {
    const user = this.toObject();
    delete user.password;
    return user;
  }

export default model("User", userSchema);