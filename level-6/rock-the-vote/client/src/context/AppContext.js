import {createContext} from "react";
import { useNavigate } from "react-router-dom";
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

  const navToUserIssues = () => {
    navigate("/myissues")
  };

  const navToNewIssues = () => {
    navigate("/newissue")
  };

  const postNewIssue = (issue) => {
    userAxios.post("/api/issues/new", {...issue})
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  };
  
  return (
    <AppContext.Provider value={{inputHandler, navToLogin, navToAllIssues, navToUserIssues, navToNewIssues, userAxios, postNewIssue}}>
      {props.children}
    </AppContext.Provider>
  );
}
export {AppContext, AppContextProvider}