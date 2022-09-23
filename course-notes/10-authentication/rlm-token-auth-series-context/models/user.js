const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  memberSince: {
    type: Date,
    default: Date.now
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});
// Create pre-save hook
  // in essence, the code within .pre() will fire before any specified action on the db, which is determined by the first string argument... in this case, "save"
    // In this case, the function will fire before anything is actually saved to the db
    // note that we do NOT want to use an arrow function here because we want to use the .this keyword
  userSchema.pre("save", function(next) {
    const user = this;
    console.log("userSchema.pre('save', function(next) fired");
    // this ensures that the pre-save hook ONLY fires on initial sign up:
    if (!user.isModified("password")) return next()
    // bcrypt's .hash() method takes a string, or the user password, a hash param, and a callback function that returns
    // an error or the hashed string.
    bcrypt.hash(
        user.password,
        10,
        (err, hashPassword) => {
          if (err) {
            return next(err);
          }
          user.password = hashPassword;
          next();
        });
  });

// create new method to check encrypted password
  // this is setup by assigning a new named method to theSchemaObject.methods.newMethodName = function()
    // again, don't use an arrow function because we want to the scope of the typical this keyword
  userSchema.methods.checkPassword = function(passwordAttempt, callback) {
    // function from bcrypt that tests whether a plaintext string is equal to a hash
      // bcrypt.compare() takes 3 arguments, the plaintext string under evaluation, the 'true' hash version of the plain text, and a callback function
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
      // if there is an error, call the callback function that we originally passed in:
      if (err) {
        return callback(err);
      }
      // otherwise, return callback with null and isMatched passed.
        // practically speaking, this will allow us to use the following on our route:
        // user.checkPassword(req.body.password, (err, isMatch) => {})
          // if the passwordAttempt === this.password, err will equal 'null' and isMatch will equal TRUE
          // if the passwordAttempt !== this.password, err will equal 'null' and isMatch will equal FALSE
          // if there is an error, err will equal an error object
      return callback(null, isMatch);
    })
  }
// create method to remove password in response and token=
  userSchema.methods.removePassword = function() {
    const user = this.toObject();
    delete user.password
    return user;
  }

module.exports = mongoose.model("User", userSchema)