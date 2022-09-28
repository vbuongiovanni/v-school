import React, {useContext} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import NavBar from "./components/navbar/NavBar.js";
import LoginHeader from "./components/navbar/LoginHeader";
import Login from "./components/login/Login.js";
import ProtectedRoute from "./ProtectedRoute.js";
import Issues from "./components/issues/Issues.js";
import Issue from "./components/issues/Issue";
import NewIssue from "./components/issues/NewIssue";
import { UserContext } from "./context/UserContext.js";
import "./style.css";
const App = () => {
  const {user, token} = useContext(UserContext);
  return (
    <div className="app">
      {token ? <NavBar/> : <LoginHeader/>}
      <div className="container-main">
        <Routes>
          <Route path="/" element={!token ? <Login/> : <Navigate to={"/issues"}/>}/>
          {/* protected routes: */}
          <Route path="/issues" element={ <ProtectedRoute token={token} redirectRoute="/"><Issues/></ProtectedRoute> }/>
          <Route path="/myissues" element={ <ProtectedRoute token={token} redirectRoute="/"><Issues username={user.username}/></ProtectedRoute> }/>
          <Route path="/issue/:issueId" element={ <ProtectedRoute token={token} redirectRoute="/"><Issue/></ProtectedRoute> }/>
          <Route path="/newissue" element={<ProtectedRoute token={token} redirectRoute="/"><NewIssue/></ProtectedRoute>}/>
        </Routes>
      </div>
    </div>
    )
}
export default App;