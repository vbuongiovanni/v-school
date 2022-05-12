import React from "react"

export default function Header(){

    return (
        <header className="header-bar">
            <img className="header-bar--logo" src={require("../images/globe-logo.png")}></img>
            <span className="header-bar--text">my travel journal.</span>
        </header>
    ) 

}