import React, {useContext} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import NavBar from "./components/navbar/NavBar.js";
import Login from "./components/login/Login.js";
import Issues from "./components/issues/Issues.js";
import NewIssue from "./components/issues/NewIssue";
import { UserContext } from "./context/UserContext.js";
import "./style.css";
const App = () => {
  const {user, token} = useContext(UserContext);
  return (
    <div className="app">
      <NavBar/>
      <div className="container-main">
        <Routes>
          <Route path="/" element={!token ? <Login/> : <Navigate to={"/issues"}/>}/>
          <Route path="/issues" element={ <Issues isShowUserPosts={false}/>}/>
          <Route path="/myissues" element={ <Issues isShowUserPosts={true}/>}/>
          <Route path="/newissue" element={<NewIssue/>}/>
        </Routes>
      </div>
    </div>
    )
}
export default App;