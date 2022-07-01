import React from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import ProfileSettings from "./pages/profile/ProfileSettings";
import ProfileInfo from "./pages/profile/ProfileInfo";
import ServicesList from "./pages/services/ServicesList";
import ServiceDetail from "./pages/services/ServiceDetail";

// Link
    // Link, which is basically just an anchor tag,
    // creates a hyperlink to a different component - This allows the user to navigate to another page.
    // Note that <Link></Link> will literally be rendered as a <a></a>.
        // has a prop called 'to', which is the url endpoint of component (e.g., "/about")
            // when the value of the 'to' prop does not begin with "/" it will build upon the URL path that was matched by the existing route and may contain ".." like command-line navigation
            // this can be used to navigate up the parent path.
        // also has a prop 'reloadDocument' to skip client side routing. this will force the browser to handle the transition normally.

// Routes and Route
    // primary way to render something in react based on current location.
    // <Routes> and <Route> can be thought of similar to an if statement with respect to the current url endpoint...
        // if the 'path' prop of the <Route/> equals the current url endpoint, then the component shown in the 'element' prop will be rendered.

    // Route
        // includes 'path' and 'element' props which represent the url endpoint and resulting component, respectively.
            // 'element' is optional (though commonly used). If not declared, the default output will be an <Outlet>. This allows you to nest urls "/users/234234"
        // also includes 'caseSensitive' to determine if the value of the 'path' prop should be matched to the url endpoint on a caseSensitive basis
        // Route elements can be nested to indicate nested UI
        // note that props can be passed down as normal.



export default function App() {


    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About props={"hello"}/>}/>
                <Route path="/contact" element={<Contact/>}/>
                {/* Static Nested */}
                <Route path="/profile/*" element={<Profile/>}>
                    <Route path="settings" element={<ProfileSettings/>}/>
                    <Route path="info" element={<ProfileInfo/>}/>
                </Route>
                {/* Dynamic Nested Nested - useParams */}
                <Route path="/services" element={<ServicesList/>}/>
                <Route path="/services/:serviceId" element={<ServiceDetail/>}/>
            </Routes>
        </div>
    )
}