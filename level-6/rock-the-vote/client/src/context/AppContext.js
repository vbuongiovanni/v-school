import {createContext} from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

const AppContextProvider = (props) => {

  const navigate = useNavigate();

  const inputHandler = (e, stateSetter) => {
    const {value, name} = e.target;
    stateSetter(prevState => ({
      ...prevState,
      [name] : value
    })) 
  }

  const navToLogin = () => {
    navigate("/")
  }

  const navToAllIssues = () => {
    navigate("/issues")
  }

  const navToUserIssues = () => {
    navigate("/myissues")
  }

  const navToNewIssues = () => {
    navigate("/newissue")
  }
  
  return (
    <AppContext.Provider value={{inputHandler, navToLogin, navToAllIssues, navToUserIssues, navToNewIssues}}>
      {props.children}
    </AppContext.Provider>
  )
}
export {AppContext, AppContextProvider}