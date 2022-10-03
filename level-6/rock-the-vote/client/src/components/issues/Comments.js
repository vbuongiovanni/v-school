import Comment from "./Comment.js";
import { useState, useContext} from "react";
import { IssueContext } from "../../context/IssueContext";

const Comments = props => {
  const {comments, issueId, setIssueState} = props;

  const {postNewComment} = useContext(IssueContext);
  const [commentText, setCommentText] = useState();

  const toggleComment = (e) => {
    e.preventDefault();
    setCommentText(prevCommentText => prevCommentText === undefined ? "" : undefined)

  }

  const handleTextChange = (e) => {
    setCommentText(e.target.value)
  }

  let baseComments = comments.filter(comment => comment.level === 0)

  baseComments = baseComments.map(baseComment => {
      let subComments = comments.filter(comment => comment.rootCommentId === baseComment.commentId)      
      subComments = subComments.map(subComment => {
        const subComments = comments.filter(comment => comment.rootCommentId === subComment.commentId);
        return {...subComment, subComments}
        })
      return {...baseComment, subComments}
  })

  const handlePostComment = e => {
    e.preventDefault();
    postNewComment(issueId, {text : commentText, rootCommentId : e.target.id, level : 0}, setIssueState)
    setCommentText(undefined)
    return false;
  }
  
  return (
    <div className="comments-container-spacer">
      <div className="comments-container">
        <div className="new-comment-container">
          <h5>Add new Comment</h5>
          <form>
            {
              commentText !== undefined && 
              <textarea className="new-comment-input" value={commentText} onChange={handleTextChange}></textarea>
            }
            <div className="comment-btn-container">
              <button className="color-btn clickable issue-btn" onClick={toggleComment}>{commentText === undefined ? "Comment" : "Cancel"}</button>
              {commentText !== undefined && 
                <button className="color-btn clickable issue-btn" id={issueId} onClick={handlePostComment}>Submit</button>
              }
            </div>
          </form>
        </div>
        <div className="comments-list-container">
          {
            baseComments.map((comment, index) => {
              return <Comment commentData={comment} key={index} index={index} issueId={issueId} setIssueState={setIssueState}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default Comments;