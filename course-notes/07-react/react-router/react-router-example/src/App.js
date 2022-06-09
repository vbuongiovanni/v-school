import React from "react";
import "./style.css";
import {Link, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/profile/Profile";
import ProfileInfo from "./pages/profile/ProfileInfo";
import ProfileSettings from "./pages/profile/ProfileSettings";


function App() {    

    // links are very similar to <a href="/somepage"></a> tag 
    
    // these two will create hyperlinks to "/", or home, and "/about", or about

    // Routes, which replaced 'Switch', match the 'path' attribute to the linked 'to' attribute.
    // <Route path="/profile" element={<Profile />}/>
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/profile/*">Profile</Link>

            <Routes>
                <Route path="/" element={<Home something={"1234"}/>}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                
                <Route path="/profile/*" element={<Profile />}>
                    <Route path="info" element={<ProfileInfo />}/>
                    <Route path="settings" element={<ProfileSettings />}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App