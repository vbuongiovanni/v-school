import {useContext} from "react";
import { UserContext } from "../../context/UserContext";
const LoginForm = (props) => {

  const {userLogin, createUser} = useContext(UserContext);
  
  const {isSignIn,
    handleFormInput,
    setUserMsg,
    userMsg,
    formInputs : {username, 
      password, 
      confirmPassword}
  } = props;

  const btnTxt = isSignIn ? "Sign in" : "Create Account";

  const loginHandler = isSignIn ? userLogin : createUser;

  const handleFormSubmit = e => {
    e.preventDefault();
    if (!isSignIn && (password !== confirmPassword)) {
      setUserMsg("Passwords do not match")
      setInterval(() => {
        setUserMsg("")
      }, 5000)
    } else {
      loginHandler({username, password}, setUserMsg);
    }
  }

  return (
    <form className="login-form">
      <div className="input-container">
        <input type="text" placeholder="User Name" name="username" value={username} onChange={handleFormInput} required/>
        <input type="text" placeholder="Password" name="password" value={password} onChange={handleFormInput} required/>
        {!isSignIn && <input type="text" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={handleFormInput}/>}
      </div>
      <p className="login-msg">{userMsg}</p>
      <div className="btn-container">
        <button className="color-btn clickable" onClick={handleFormSubmit}>{btnTxt}</button>
      </div>
    </form>
  )
}
export default LoginForm;