import {useState, createContext, useContext} from "react";
import { AppContext } from "./AppContext";

const IssueContext = createContext();

const IssueContextProvider = props => {
  const {userAxios} = useContext(AppContext);

  const getIssues = (username, issueSetterFunc) => {
    const usernameParam = username ? `?username=${username}` : "";
    userAxios.get(`/api/issues${usernameParam}`)
      .then(res => issueSetterFunc(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  };

  const sendVote = (issueId, voteAction) => {
    userAxios.post(`/api/issues/vote/${voteAction}`, {issueId})
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  };

  return (
    <IssueContext.Provider value={{getIssues, sendVote}}>
      {props.children}
    </IssueContext.Provider>
  )
}

export {IssueContext, IssueContextProvider};