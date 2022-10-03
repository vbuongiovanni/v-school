import { useContext, useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { IssueContext } from "../../context/IssueContext";
import Comments from "./Comments.js";

const Issue = () => {
  let { issueId } = useParams();
  const {navToEditUserIssue, prettyDate} = useContext(AppContext);
  const {sendVote, getIssue} = useContext(IssueContext);
  const {username} = JSON.parse(localStorage.getItem("user"));
  
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

  const handleIssueEditSelect = (e) => {
    const {id} = e.target;
    navToEditUserIssue(id);
  }
  
  return (
    <main className="issue-container">
      <article className="issue-article" key={_id}>
        <h1 className="issue-title">{title}</h1>
        <h4 className="issue-author">Authored by {author}</h4>
        <p className="issue-description">{description}</p>
        <h4 className="issue-date">Created on {prettyDate(createdDate)}</h4>
        
        {username === author && 
          <div className="mod-issue-btn-container" id={_id}>
            <button className="clickable color-btn" id={_id} onClick={handleIssueEditSelect}>Modify This Issue</button>
          </div>
        }
        <div className="vote-container">
          <div className="vote-results-container">
            <h2 className="issue-balance">Vote Balance</h2>
            <h2 className="issue-balance">{voteBalance}</h2>
          </div>
          <div className="btn-container vote-btn-container">
            <button
              className={`clickable color-btn issue-btn ${userVote === 1 ? "current-vote" : "alt-vote"}`}
              onClick={(e) => sendVote({_id}, "upvote", userVote, setIssueState)}>
                Up Vote
            </button>
            <button
              className={`clickable color-btn issue-btn ${userVote === 0 ? "current-vote" : "alt-vote"}`}
              onClick={(e) => sendVote({_id}, "abstain", userVote, setIssueState)}>
                Abstain
            </button>
            <button
              className={`clickable color-btn issue-btn ${userVote === -1 ? "current-vote" : "alt-vote"}`}
              onClick={(e) => sendVote({_id}, "downvote", userVote, setIssueState)}>
                Down Vote
            </button>
          </div>
        </div>
      </article>
      <Comments comments={comments} issueId={issueId} setIssueState={setIssueState}/>
    </main>
  )
}

export default Issue;