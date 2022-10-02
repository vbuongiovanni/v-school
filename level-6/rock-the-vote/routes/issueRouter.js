import {Router} from "express";
import Issue from "../models/issue.js";
import User from "../models/user.js";
import Vote from "../models/vote.js";
import jwt_decode from "jwt-decode";
const issueRoute = Router();

// add new Issue
  issueRoute.post("/", (req, res, next) => {
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
  issueRoute.get("", (req, res, next) => {
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
      .then(
        issues => {
          const totaledIssues = issues.map(issue => { 
            const voteBalance = issue.votes.reduce((prev, current) => current.voteValue + prev, 0);
            const {_id, title, description, authorId, author, createdDate} = issue;
            return {_id, title, description, authorId, author, createdDate, voteBalance}
          });
          res.send(totaledIssues)
        }, 
        err => {
          res.status(500);
          return next(err);
        }
      )
  });

// route to handle get requests of single issue
  issueRoute.get("/:issueId", (req, res, next) => {
    const {issueId} = req.params;
    const jwt = req.get('Authorization').toString().replace("Bearer ", "").trim();
    const userId = jwt_decode(jwt)._id;

    Issue
      .findOne({_id : issueId})
      .populate("votes")
      .populate("comments")
      .then(
        issue => {
          // get user's current vote:
          const currentVote = issue.votes.find(vote => vote.voterId.toString() === userId);
          const userVote = currentVote ? currentVote.voteValue : 0

          // get aggregate vote balance:
          const voteBalance = issue.votes.reduce((prev, current) => current.voteValue + prev, 0);
          const comments = issue.comments
            .map(comment => {
              const {text, commentCreatedDate, commenter, level, rootCommentId, _id} = comment; 
              return {commentId : _id, rootCommentId, commenter, level, text, commentCreatedDate} ;
            })
            .sort((a, b) => a.commentCreatedDate <= b.commentCreatedDate ? -1 : 1)

          issue.votes = undefined;
          issue.comments = undefined;
          res.send({...issue.toObject(), userVote, voteBalance, comments})
        }, 
        err => {
          res.status(500);
          return next(err);
        }
      )
  });

// route to handle editing an existing issue - under construction
  issueRoute.put("/:issueId", (req, res, next) => {
    const {issueId} = req.params;
    const {title, description} = req.body;
    const jwt = req.get('Authorization').toString().replace("Bearer ", "").trim();
    const userId = jwt_decode(jwt)._id;

    Issue.findOneAndUpdate(
      {_id : issueId, authorId : userId},
      {title, description},
      {runValidators : true, returnOriginal : false},
      (err, updatedIssue) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        res.send(updatedIssue);
      })
  });

// route to delete an existing post
  issueRoute.delete("/:issueId", (req, res, next) => {
    const {issueId} = req.params;
    const jwt = req.get('Authorization').toString().replace("Bearer ", "").trim();
    const userId = jwt_decode(jwt)._id;

    Issue
      .findOneAndDelete({_id : issueId, authorId : userId}, (err, deletedIssue) => {
        if (err) {
          res.status(500)
          return next(err);
        }
        res.send(deletedIssue);
      })
  });

// route to handle voting
  issueRoute.post("/vote/:voteType", (req, res, next) => {
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
          // Find Issue to update it's array
          Issue.findOne({_id : reqIssueId}, (err, issue) => {
            if (err) {
              res.status(500);
              return next(err);
            }
            Issue.findOneAndUpdate(
              {_id : reqIssueId},
              {votes : [...issue.votes, vote._id]},
              {runValidators : true, returnOriginal : false},
              (err, updatedIssue) => {
                if (err) {
                  res.status(500);
                  return next(err);
                }
                res.send({voteValue : vote.voteValue, issueId : updatedIssue._id});
              }
              )
          })
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
            Issue.findOne({_id : reqIssueId}, (err, issue) => {
              if (err) {
                res.status(500);
                return next(err);
              }
              const updatedVoteIds = [...issue.votes, vote._id];
              const existingVoteIds = [];
              const uniqueVoteIds = updatedVoteIds.filter(voteId => {
                if (existingVoteIds.indexOf(voteId.toString()) === -1) {
                  existingVoteIds.push(voteId.toString())
                  return true;
                } else {
                  return false;
                }
              })
              Issue.findOneAndUpdate(
                {_id : reqIssueId},
                {votes : [...uniqueVoteIds]},
                {runValidators : true, returnOriginal : false},
                (err, updatedIssue) => {
                  if (err) {
                    res.status(500);
                    return next(err);
                  }
                  res.send({voteValue : vote.voteValue, issueId : updatedIssue._id});
                }
                )
            })
            
        });
      }
    })


  });

export default issueRoute;