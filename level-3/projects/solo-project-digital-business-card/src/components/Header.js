import React from 'react'
require("../style.css")

export default function Header(){
    return (
        <header className="header--container">
            <img src={require("../resources/placeholder-profile-image.png")} alt="email button"></img>
            <h1 className="header--name">Vince Buongiovanni</h1>
            <p className="header--job-title">Web Developer</p>
            <p className="header--personal-website">vbuongi.website</p>
            <div className="header--button-container">
                <img src={require("../resources/email-button.png")} alt="email button"></img>
                <img src={require("../resources/linkedin-button.png")} alt="email button"></img>
            </div>
        </header>
    )
}