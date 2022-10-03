import {createContext, useContext} from "react";
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
  const sendVote = (issueId, voteAction, userVote, issueStateSetter) => {
    userAxios.post(`/api/issue/vote/${voteAction}`, {issueId})
      .then(res => {
        const voteValue = voteAction === "upvote" ? 1 : voteAction === "downvote" ? -1 : 0;
        if (voteValue !== userVote) {
          issueStateSetter(prevIssueState => ({...prevIssueState, userVote : res.data.voteValue}))
        }
      })
      .catch(err => console.log(err.response.data.errMsg))
  };

  // callback to post new issue
  const postNewIssue = (issue) => {
    userAxios.post("/api/issue/", {...issue})
      .then(res => console.log("new issue posted"))
      .catch(err => console.log(err.response.data.errMsg))
  };

  // callback to delete existing issue 
  const deleteIssue = (issueId) => {
    userAxios.delete(`/api/issue/${issueId}`)
      .then(res => console.log(`issue id ${res.data._id} has been deleted.`))
      .catch(err => console.log(err.response.data))
  }

  // callback to edit existing issue 
    const editIssue = (issueId, issue) => {
      userAxios.put(`/api/issue/${issueId}`, issue)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response.data))
    }

  // callback to post new comment to existing issue
  const postNewComment = (issueId, comment, stateSetterFunc) => {
    console.log({issueId, ...comment})
    userAxios.post(`/api/comment/new/${issueId}`, comment)
      .then(res => {
        stateSetterFunc(prevState => ({...prevState, comments : [...prevState.comments, {...res.data, commentId : res.data._id}]}))
        console.log(res.data)
      })
      .catch(err => console.log(err.response.data.errMsg))
  };

  return (
    <IssueContext.Provider value={{getIssues, getIssue, sendVote, postNewIssue, postNewComment, deleteIssue, editIssue}}>
      {props.children}
    </IssueContext.Provider>
  )
}

export {IssueContext, IssueContextProvider};