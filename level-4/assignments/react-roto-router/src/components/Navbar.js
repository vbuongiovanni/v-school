import React from "react";
import {Link, useLocation} from "react-router-dom";

export default function Navbar(){

    let homeClassName = ""
    let aboutClassName = ""
    let servicesClassName = ""

    switch (useLocation().pathname) {
        case "/" :
            homeClassName = "active-page";
            break;
        case "/about" :
            aboutClassName = "active-page";
            break;
        case "/services":
            servicesClassName = "active-page";
            break;
    }

    return (
        <nav>
            <div className="page-title-container">
                <h2>Fake City Plumbing Company</h2>
                <h4>An Acme Corporation</h4>
            </div>
            <div className="page-controls-container">
                <Link to="/" className={homeClassName}>Home</Link>
                <Link to="/about" className={aboutClassName}>About Us</Link>
                <Link to="/services" className={servicesClassName}>Services</Link>
            </div>            
        </nav>
    )
}