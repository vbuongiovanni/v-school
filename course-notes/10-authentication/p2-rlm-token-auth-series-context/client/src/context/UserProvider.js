import React, {useState, createContext} from "react";
import axios from "axios";

const UserContext = createContext();

const UserProvider = (props) => {

  const initialState = {
    User : {},
    token : "",
    todos : []
  };

  const [userState, setUserState] = useState(initialState);

  const signup = (credentials) => {
    axios.post("/auth/signup", credentials)
      .then(res => console.log(res))
      .catch(err => console.log(err.response.data.errMsg))
  };

  const login = (credentials) => {
    axios.post("/auth/login", credentials)
      .then(res => console.log(res))
      .catch(err => console.log(err.response.data.errMsg))
  };

  return (
    <UserContext.Provider value={{...userState, signup, login}}>
      {props.children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};