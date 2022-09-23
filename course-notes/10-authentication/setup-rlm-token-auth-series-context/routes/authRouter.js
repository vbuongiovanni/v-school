const express = require("express");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

// Sign up

authRouter.post("/signup", (req, res, next) => {
  User.findOne({username : req.body.username.toLowerCase()}, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    if (user) {
      res.status(403);
      const takenUserErr = new Error("That username is already taken");
      return next(takenUserErr);
    }
    const newUser = new User(req.body);
    newUser.save((err, savedUser) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      // sign() is a method that takes a payload and a secret, then returns a JWT.
      const token = jwt.sign(
          savedUser.toObject(), // payload
          process.env.SECRET , // secrete
          );
      res.status(201).send({token, user : savedUser});
    })
  })
})

// Login

authRouter.post("/login", (req, res, next) => {
  const loginErr = new Error("Username or password is incorrect");
  User.findOne({username : req.body.username.toLowerCase()}, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    // tests if 1) does user exists and 2) is the password correct:
    if (!user || (user.password !== req.body.password)) {
      res.status(403);
      return next(loginErr);
    }
    const token = jwt.sign(user.toObject(), process.env.SECRET);
    res.status(200).send({token, user});
  }) 
})

module.exports = authRouter;