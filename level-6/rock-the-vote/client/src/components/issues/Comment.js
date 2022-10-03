import {useState, useContext} from "react";
import { IssueContext } from "../../context/IssueContext";

const Comment = props => {
  const {text, commenter, commentCreatedDate, subComments, commentId, level} = props.commentData;
  const {issueId, setIssueState} = props;
  const {postNewComment} = useContext(IssueContext);

  const [commentText, setCommentText] = useState();

  const toggleComment = (e) => {
    setCommentText(prevCommentText => prevCommentText === undefined ? "" : undefined)
  }

  const handleTextChange = (e) => {
    setCommentText(e.target.value)
  }

  const handlePostComment = e => {
    postNewComment(issueId, {text : commentText, rootCommentId : commentId, level : level + 1}, setIssueState)
    setCommentText(undefined)
  }

  return (
    <div key={props.index} id={commentId} className={`comment`}>
        <p>{text}</p>
        <h4>{commentCreatedDate}</h4>
        <h4>{commenter}</h4>
        {
           (level < 2) && 
           <>
            {
            (commentText !== undefined) && 
              <textarea className="new-subcomment-input" value={commentText} onChange={handleTextChange}></textarea>
            }
            <div className="comment-btn-container-single">
              <button className="color-btn clickable issue-btn" onClick={toggleComment}>{commentText === undefined ? `Reply to ${commenter}'s comment` : "Cancel"}</button>
              {commentText !== undefined && 
                <button className="color-btn clickable issue-btn" onClick={handlePostComment}>Submit</button>
              }
            </div>
           </>
        }

        {subComments && 
          <div>
            {subComments.map((subComment, index) => <Comment commentData={subComment} key={index} index={index} issueId={issueId} setIssueState={setIssueState}/>)}
          </div>
        }
    </div>
  )
}
export default Comment;