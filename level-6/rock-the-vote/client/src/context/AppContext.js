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
    })); 
  };

  const navToLogin = () => {
    navigate("/");
  };

  const navToAllIssues = () => {
    navigate("/issues");
  };

  const navToSpecificIssue = (issueId) => {
    navigate(`/issues/${issueId}`);
  };

  const navToUserIssues = () => {
    navigate("/myissues");
  };

  const navToEditUserIssue = (issueId) => {
    navigate(`/myissues/${issueId}`);
  };

  const navToNewIssues = () => {
    navigate("/newissue");
  };

  const prettyDate = (date) => {
    const toDate = new Date(date);
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ];
    const prettyDate = `${months[toDate.getMonth()]} ${toDate.getDate()}, ${toDate.getFullYear()}`;
    return prettyDate;
  }
  
  return (
    <AppContext.Provider value={{prettyDate, inputHandler, navToLogin, navToAllIssues, navToEditUserIssue, navToSpecificIssue, navToUserIssues, navToNewIssues, userAxios, useLocation}}>
      {props.children}
    </AppContext.Provider>
  );
}
export {AppContext, AppContextProvider};