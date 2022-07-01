import React from "react";
import {Link, Route, Routes} from "react-router-dom";

export default function Navbar() {
    
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/services">Services</Link>
        </nav>
    )
}