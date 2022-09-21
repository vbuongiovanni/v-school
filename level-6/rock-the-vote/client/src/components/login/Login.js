import {useState, useContext} from "react";
import { AppContext } from "../../context/AppContext";
import LoginForm from "./LoginForm";

const Login = () => {

  const {inputHandler} = useContext(AppContext);

  const initInputs = {
    username : "",
    password : "",
    confirmPassword : "",
  }
  
  const [formInputs, setFormInputs] = useState(initInputs);
  const [userMsg, setUserMsg] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);

  // handlers

  const toggleSignLogout = () => {
    setIsSignIn(prevState => !prevState);
    setFormInputs(prevState => ({...prevState, confirmPassword : ""}))
    return false;
  }

  return (
    <main className="login-container">
      <h2>User Login</h2>
      <LoginForm isSignIn={isSignIn} handleFormInput={e => inputHandler(e, setFormInputs)} formInputs={formInputs} setUserMsg={setUserMsg} userMsg={userMsg}/>
      <p className="btn-txt" onClick={toggleSignLogout}>{isSignIn ? "Create an account" : "Existing User"}</p>
    </main>
  )
}
export default Login;