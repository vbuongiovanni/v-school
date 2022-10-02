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
    navigate(`/issues/${issueId}`)
  };

  const navToUserIssues = () => {
    navigate("/myissues")
  };

  const navToEditUserIssue = (issueId) => {
    navigate(`/myissues/${issueId}`)
  };

  const navToNewIssues = () => {
    navigate("/newissue")
  };
  
  return (
    <AppContext.Provider value={{inputHandler, navToLogin, navToAllIssues, navToEditUserIssue, navToSpecificIssue, navToUserIssues, navToNewIssues, userAxios, useLocation}}>
      {props.children}
    </AppContext.Provider>
  );
}
export {AppContext, AppContextProvider}