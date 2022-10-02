import { useContext, useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { IssueContext } from "../../context/IssueContext";
import Comments from "./Comments.js";

const Issue = () => {
  let { issueId } = useParams();
  const {navToEditUserIssue} = useContext(AppContext);
  const {sendVote, getIssue} = useContext(IssueContext);
  
  const initIssueState = {
    author : "",
    createdDate : "",
    description : "",
    title : "",
    votes : "",
    _id : "",
    comments : [],
    userVote : 0, 
    voteBalance : 0
  }
  const [issueState, setIssueState] = useState(initIssueState);
  
  useEffect(() => {
    getIssue(issueId, setIssueState);
  }, [issueState.userVote])
  
  const {author, createdDate, description, title, _id, userVote, voteBalance, comments} = issueState;
  const [voteState, setVoteState] = useState(voteBalance);

  const handleIssueEditSelect = (e) => {
    const {id} = e.target;
    navToEditUserIssue(id);
  }
  
  return (
    <main className="issue-container">
      <article className="issue-article" key={_id}>
        <h1>{title}</h1>
        <h4>Created date {createdDate}</h4>
        <h4>Authored by {author}</h4>
        <h4>Vote Balance: {voteState}</h4>
        <p>{description}</p>
        <div id={_id}>
          <button id={_id} onClick={handleIssueEditSelect}>Modify Issue</button>
        </div>
        <div className="btn-container">
          <button
            className={`vote-btn ${userVote === 1 && "current-vote"}`}
            onClick={(e) => sendVote({_id}, "upvote", setVoteState, voteState, userVote, setIssueState)}>
              Up Vote Issue
          </button>
          <button
            className={`vote-btn ${userVote === 0 && "current-vote"}`}
            onClick={(e) => sendVote({_id}, "abstain", setVoteState, voteState, userVote, setIssueState)}>
              Abstain
          </button>
          <button
            className={`vote-btn ${userVote === -1 && "current-vote"}`}
            onClick={(e) => sendVote({_id}, "downvote", setVoteState, voteState, userVote, setIssueState)}>
              Down Vote Issue
          </button>
        </div>
      </article>
      <Comments comments={comments} issueId={issueId} setIssueState={setIssueState}/>
    </main>
  )
}

export default Issue;