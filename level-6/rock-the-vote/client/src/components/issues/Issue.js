import { useContext } from "react";
import { IssueContext } from "../../context/IssueContext";
const Issue = props => {
  const {sendVote} = useContext(IssueContext);
  const {author, createdDate, description, title, votes, _id} = props.issueDetails;
  
  

  return (
    <article className="issue-article">
      <h1>{title}</h1>
      <h4>Created date {createdDate}</h4>
      <h4>Authored by {author}</h4>
      <h4>Vote Balance: {votes}</h4>
      <p>{description}</p>
      <div className="btn-container">
        <button onClick={(e) => sendVote({_id}, "upvote")}>Up Vote Issue</button>
        <button onClick={(e) => sendVote({_id}, "abstain")}>Abstain</button>
        <button onClick={(e) => sendVote({_id}, "downvote")}>Down Vote Issue</button>
      </div>
    </article>
  )
}

export default Issue;