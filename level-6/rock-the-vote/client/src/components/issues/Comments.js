import Comment from "./Comment.js";
import { useState, useContext} from "react";
import { AppContext } from "../../context/AppContext";

const Comments = props => {
  const {comments, issueId, setIssueState} = props;

  const {postNewComment} = useContext(AppContext);
  const [commentText, setCommentText] = useState();

  const toggleComment = (e) => {
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
  
  return (
    <div className="comments-container">
      <div>
        <h5>Add new Comment</h5>
        {
          commentText !== undefined && 
            <textarea value={commentText} onChange={handleTextChange}></textarea>
        }
        <div className="comment-btn-container">
          <button onClick={toggleComment}>{commentText === undefined ? "Comment" : "Cancel"}</button>
          {commentText !== undefined && 
            <button id={issueId} onClick={e => postNewComment(issueId, {text : commentText, rootCommentId : e.target.id, level : 0}, setIssueState)}>Submit</button>
          }
        </div>
      </div>
      {
      baseComments.map((comment, index) => {
        return <Comment commentData={comment} key={index} index={index} issueId={issueId} setIssueState={setIssueState}/>
      })
      }
    </div>
  )
}

export default Comments;