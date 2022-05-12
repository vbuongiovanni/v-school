import React from 'react'
import "../style.css"

export default function Navbar(){
    return (
        <nav className="navbar--container">
            <img className="logo" src={require("../images/airbnb-logo.png")} alt="airbnb Logo"></img>
        </nav>
    )
}
