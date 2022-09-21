import React, {useState, createContext} from "react";
import axios from "axios";

const UserContext = createContext();

const UserProvider = (props) => {

  const initialState = {
    user : JSON.parse(localStorage.getItem("user")) || {},
    token : localStorage.getItem("token") || "",
    todos : []
  };

  const [userState, setUserState] = useState(initialState);

  const signup = (credentials) => {
    axios.post("/auth/signup", credentials)
      .then(res => {
        const {user, token} = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState(prevUserState => {
          return ({
            ...prevUserState,
            user, 
            token
          })
        })
      })
      .catch(err => console.log(err.response.data.errMsg))
  };

  const login = (credentials) => {
    axios.post("/auth/login", credentials)
      .then(res => {
        const {user, token} = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState(prevUserState => {
          return ({
            ...prevUserState,
            user, 
            token
          })
        })
      })
      .catch(err => console.log(err.response.data.errMsg))
  };

  return (
    <UserContext.Provider value={{...userState, signup, login}}>
      {props.children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};