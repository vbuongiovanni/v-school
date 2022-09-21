import React, {createContext, useState, useContext} from "react";
import { AppContext } from "./AppContext";
import axios from "axios";

const UserContext = createContext();

const UserContextProvider = (props) => {

  const {navToLogin} = useContext(AppContext)

  const initUserContext = {
    user : {},
    token : ""
  };
  const [userContext, setUserContext] = useState(initUserContext);

  // write request to perform post requests for user login/signup
  const userLogin = (inputs) => {
    axios.post("/user/login", inputs)
      .then(res => res.data)
      .then(data => {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        setUserContext(data);
      })
      .catch(err => console.log(err.response.data.errMsg))
  } 

  const createUser = (inputs) => {
    axios.post("/user/new", inputs)
      .then(res => res.data)
      .then(data => {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        setUserContext(data);
      })
      .catch(err => console.log(err.response.data.errMsg))
  } 

  const logout = () => {
    setUserContext({user : {}, token : ""});
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navToLogin()
  }

  return (
    <UserContext.Provider value={{userLogin, createUser, ...userContext, logout}}>
      {props.children}
    </UserContext.Provider>
  )
}

export {UserContextProvider, UserContext};