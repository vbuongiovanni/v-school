import {Router} from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js"

const loginRoute = Router();

// existing user login
loginRoute.post("/login", (req, res, next) => {
  const {username : reqUsername, password : reqPassword} = req.body;
  const failedLoginErr = new Error("Login failed - username does not exist or password is incorrect.");
  User.findOne({username : reqUsername}, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    };
    if ((user === null) || (user.password !== reqPassword)) {
      res.status(403);
      return next(failedLoginErr);
    };
    // create JWT : 
    const token = jwt.sign(
      user.toObject(), // payload
      process.env.SECRET // secret
    );
    res.send({user, token});
  })
});

// new user
loginRoute.post("/new", (req, res, next) => {
  const {username : reqUsername, password : reqPassword} = req.body;
  const existingUserErr = new Error("User already exists - please try a different username.");
  User.findOne({username : reqUsername}, (err, user) => {
    if (err) {
      res.status(500)
      return next(err);
    };
    if (user !== null) {
      res.status(403);
      return next(existingUserErr);
    };
    const newUser = new User({
      username : reqUsername,
      password : reqPassword
    });
    newUser.save((err, newUser) => {
      if (err) {
        res.status(500);
        return next(err);
      };
      // create JWT : 
        const token = jwt.sign(
          newUser.toObject(), // payload
          process.env.SECRET // secret
        );
      res.send({user : newUser, token});
    })
  })
});

export default loginRoute;