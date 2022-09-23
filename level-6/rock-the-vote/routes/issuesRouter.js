import {Router} from "express";
import Issue from "../models/issue.js";
import User from "../models/user.js";
import jwt_decode from "jwt-decode";
const issuesRoute = Router();

// add new Issue
issuesRoute.post("/new/", (req, res, next) => {
  const {title, description} = req.body;
  // parse username of author
  const jwt = req.get('Authorization').toString().replace("Bearer ", "").trim();
  const author = jwt_decode(jwt).username;
  // get _id of author:
  User.findOne({username : author}, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    };
    const {_id} = user;
    // create new issue
    const newIssue = new Issue({title, description, author : _id});
    // save issue
    newIssue.save((err, savedIssue) => {
      if (err) {
        res.status(500);
        if (err.code === 11000) {
          return next(new Error("An issue already exists with that same name. Please create a more unique name or contribute to the existing issue by voting and added comments."));
        } else {
          return next(err);
        }
      }
      res.send(savedIssue);
    });
  });
});

export default issuesRoute;