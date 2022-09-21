import React, {createContext} from "react";
import axios from "axios";

const UserContext = createContext();

const UserContextProvider = (props) => {
  return (
    <UserContext.Provider value={1}>
      {props.children}
    </UserContext.Provider>
  )
}

export {UserContextProvider, UserContext};