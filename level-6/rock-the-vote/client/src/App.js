import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Login from "./components/login/Login.js";
import "./style.css";
const App = () => {
  return (
    <div className="container-main">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/issues" element={<h1>issues</h1>}/>
        <Route path="/user" element={<h1>user profile</h1>}/>/>
      </Routes>
    </div>
    )
}
export default App;