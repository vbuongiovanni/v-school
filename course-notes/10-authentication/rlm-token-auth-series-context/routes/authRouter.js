const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

// Signup
authRouter.post("/signup", (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if(err){
      res.status(500)
      return next(err)
    }
    if(user){
      res.status(403)
      return next(new Error("That username is already taken"))
    }
    const newUser = new User(req.body)
    newUser.save((err, savedUser) => {
      if(err){
        res.status(500)
        return next(err)
      }
                            // payload,            // secret
      const token = jwt.sign(savedUser.removePassword(), process.env.SECRET)
      return res.status(201).send({ token, user: savedUser.removePassword() })
    })
  })
})

// Login
authRouter.post("/login", (req, res, next) => {
  const failedLoginErr = new Error("Username or Password are incorrect");
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if(err){
      res.status(500)
      return next(err)
    }
    if(!user){
      res.status(403)
      return next(failedLoginErr)
    }
    // use checkPassword method
    user.checkPassword(req.body.password, (err, isMatch) => {
      // if there is an error or isMatch is false, then return failed login err
      if (err || !isMatch) {
        res.status(403);
        return next(failedLoginErr);
      } 
      // otherwise, sign token and send response
      const token = jwt.sign(user.removePassword(), process.env.SECRET)
      return res.status(200).send({ token, user : user.removePassword() })
    })
  })
})


module.exports = authRouter