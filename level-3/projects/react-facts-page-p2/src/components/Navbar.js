import React from 'react';
import '../style.css';

export default function Navbar(){
    return (
        <nav>
            <div className="navbar-logo">
                <img className="react-logo-image" src={require("../resources/reactjs-icon.png")}></img>
                <span className="react-logo-text">ReactFacts</span>
            </div>
            <span className="navbar-title">React Course - Project 1</span>
        </nav>
    )
}