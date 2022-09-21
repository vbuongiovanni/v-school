import {useState, createContext} from "react";
import axios from "axios";

const IssueContext = createContext();
const userAxios = axios.create();

// create custom instance of axios w/ bearer header baked into request
userAxios.interceptors.request.use(config => {
  const token = localStorage.get("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
})

const IssueContextProvider = props => {

  return (
    <IssueContext.Provider value={1}>
      {props.children}
    </IssueContext.Provider>
  )
}

export {IssueContext, IssueContextProvider};