import React from "react"

export default function Header(){

    return (
        <header className="header--container">
            
            <navbar className="header--container-navbar">
                <div className="navbar--container">
                    <span>Start Bootstrap</span>
                </div>
                <div className="navbar--container">
                    <span>Home</span>
                    <span>About</span>
                    <span>Sample Post</span>
                    <span>Contact</span>
                </div>
            </navbar>
            <div className="header--container-text">
                <h1>Clean Blog</h1>
                <h1>A Blog Theme by Start Bootstrap</h1>
            </div>            
        </header>
    )
}