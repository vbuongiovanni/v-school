import { Router } from "express";
import Comment from "../models/comment.js";
import Issue from "../models/issue.js";
import jwt_decode from "jwt-decode";

const commentRoute = Router();

commentRoute.post("/new/:issueId", (req, res, next) => {
  const {issueId} = req.params;
  const {level, text, rootCommentId} = req.body;
  const validatedRootCommentId = rootCommentId ? rootCommentId : issueId;
  const jwt = req.get('Authorization').toString().replace("Bearer ", "").trim();
  const {username} = jwt_decode(jwt);
  const newComment = new Comment({level, issueId, text, rootCommentId : validatedRootCommentId, commenter : username});
  newComment.save((err, savedComment) => {
    if (err) {
      res.status(500);
      return next(err);
    };
    Issue.findOne({_id : issueId}, (err, issue) => {
      if (err) {
        res.status(500);
        return next(err);
      };
      Issue.findOneAndUpdate(
        {_id : issueId},
        {comments : [...issue.comments, savedComment._id]},
        {runValidators : true, returnOriginal : false},
        (err, updatedIssue) => {
          if (err) {
            res.status(500);
            return next(err);
          }
          console.log(savedComment)
          res.send(savedComment);
        })
    })
  })
})

export default commentRoute