import {useState, createContext, useContext} from "react";
import { AppContext } from "./AppContext";

const IssueContext = createContext();

const IssueContextProvider = props => {
  const {userAxios} = useContext(AppContext);

  // function to make GET request for all issues (global or user specific), then set state w/ response
  const getIssues = (username, issueSetterFunc) => {
    const usernameParam = username ? `?username=${username}` : "";
    userAxios.get(`/api/issue${usernameParam}`)
      .then(res => issueSetterFunc(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  };
  
  // function to make GET request for specific issue
  const getIssue = (issueId, issueSetterFunc) => {
    userAxios.get(`/api/issue/${issueId}`, {issueId})
      .then(res => {
        issueSetterFunc(res.data);
      })
      .catch(err => console.log(err.response.data.errMsg))
  };

  // callback to handle voting
  const sendVote = (issueId, voteAction, voteBalanceSetter, liveVoteBalance, userVote, issueStateSetter) => {
    userAxios.post(`/api/issue/vote/${voteAction}`, {issueId})
      .then(res => {
        const voteValue = voteAction === "upvote" ? 1 : voteAction === "downvote" ? -1 : 0;
        if (voteValue != userVote) {
          voteBalanceSetter((liveVoteBalance - userVote) + res.data.voteValue)
          issueStateSetter(prevIssueState => ({...prevIssueState, userVote : res.data.voteValue}))
        }
      })
      .catch(err => console.log(err.response.data.errMsg))
  };

  return (
    <IssueContext.Provider value={{getIssues, getIssue, sendVote}}>
      {props.children}
    </IssueContext.Provider>
  )
}

export {IssueContext, IssueContextProvider};