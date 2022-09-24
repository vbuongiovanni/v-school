import {Router} from "express";
import Issue from "../models/issue.js";
import User from "../models/user.js";
import Vote from "../models/vote.js";
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
    const newIssue = new Issue({title, description, author, authorId : _id});
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

// single route to handle get requests of all users and a single specified user:
issuesRoute.get("", (req, res, next) => {
  // create empty query object
  const queryObject = {};
  // pull query param from request
  const {username} = req.query;
  // if query param exists, then add it to query object. otherwise, leave blank.
  if (username) {
    queryObject.author = username;
  }

  Issue
    .find(queryObject)
    .populate("votes")
    .then((err, issues) => {
      if (err) {
        res.status(500);
        return next(err);
      };
      res.send(issues)
    })
    
    

  // Issue.find(queryObject, (err, issues) => {
  //   if (err) {
  //     res.status(500);
  //     return next(err);
  //   };
  //   res.send(issues)
  // });

});

// route to handle voting
issuesRoute.post("/vote/:voteType", (req, res, next) => {
  const {issueId : reqIssueId} = req.body;
  const {voteType} = req.params;

  // assign vote value based on voteType
  let voteValue
  switch (voteType) {
    case "upvote": 
      voteValue = 1;
      break;
    case "downvote":
      voteValue = -1;
      break;
    case "abstain":
      voteValue = 0;
      break;
    default:
      voteValue = undefined
  }

  // if there are no matches, then throw an error
  if (voteValue === undefined) {
    res.status(500);
    return next(new Error(`Invalid vote type - ${voteType}`));
  }

  // parse username of author
  const jwt = req.get('Authorization').toString().replace("Bearer ", "").trim();
  const reqVoterId = jwt_decode(jwt)._id;
  Vote.findOne({voterId : reqVoterId, issueId : reqIssueId}, (err, vote) => {
    if (err) {
      res.status(403);
      return next(err);
    }
    // if specified vote doesn't exist, create new
    if (!vote) {
      const newVote = new Vote({voterId : reqVoterId, issueId : reqIssueId, voteValue : voteValue});
      newVote.save((err, vote) => {
        if (err) {
          res.status(403);
          return next(err);
        }
        res.send({voteValue : vote.voteValue});
      });
    // otherwise, find and update
    } else {
      Vote.findOneAndUpdate(
        {voterId : reqVoterId, issueId : reqIssueId},
        {voterId : reqVoterId, issueId : reqIssueId, voteValue : voteValue},
        {runValidators : true, returnOriginal : false},
        (err, vote) => {
          if (err) {
            res.status(403);
            return next(err);
          }
          res.send({voteValue : vote.voteValue});
      });
    }
  })


});

export default issuesRoute;