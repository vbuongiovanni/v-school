import {createContext} from "react";
import { useNavigate, useLocation} from "react-router-dom";
import axios from "axios";

const AppContext = createContext();
const userAxios = axios.create();

// create custom instance of axios w/ bearer header baked into request
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const AppContextProvider = (props) => {

  const navigate = useNavigate();

  const inputHandler = (e, stateSetter) => {
    const {value, name} = e.target;
    stateSetter(prevState => ({
      ...prevState,
      [name] : value
    })) 
  };

  const navToLogin = () => {
    navigate("/")
  };

  const navToAllIssues = () => {
    navigate("/issues")
  };

  const navToSpecificIssue = (issueId) => {
    navigate(`/issue/${issueId}`)
  };

  const navToUserIssues = () => {
    navigate("/myissues")
  };

  const navToNewIssues = () => {
    navigate("/newissue")
  };

  const postNewIssue = (issue) => {
    userAxios.post("/api/issue/new", {...issue})
      .then(res => {
        navToUserIssues();
      })
      .catch(err => console.log(err.response.data.errMsg))
  };

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
    <AppContext.Provider value={{inputHandler, navToLogin, navToAllIssues, postNewComment, navToSpecificIssue, navToUserIssues, navToNewIssues, userAxios, postNewIssue, useLocation}}>
      {props.children}
    </AppContext.Provider>
  );
}
export {AppContext, AppContextProvider}