import {useState, createContext, useContext} from "react";
import { AppContext } from "./AppContext";

const IssueContext = createContext();

const IssueContextProvider = props => {
  const {userAxios} = useContext(AppContext);

  return (
    <IssueContext.Provider value={1}>
      {props.children}
    </IssueContext.Provider>
  )
}

export {IssueContext, IssueContextProvider};