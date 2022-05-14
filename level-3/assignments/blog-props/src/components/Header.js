import React from "react"

export default function Header(){

    return (
        <header>
            <div className="header--primary">
                <div className="header--container-navbar">
                    <div className="navbar--container navbar--container-title">
                        Start Bootstrap
                    </div>
                    <div className="navbar--container-nav-items">
                        <span>Home</span>
                        <span>About</span>
                        <span>Sample Post</span>
                        <span>Contact</span>
                    </div>
                </div>
                <div className="header--container-text">
                    <h1>Clean Blog</h1>
                    <h2>A Blog Theme by Start Bootstrap</h2>
                </div>            
            </div>
        </header>
    )
}