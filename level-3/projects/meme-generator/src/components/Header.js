import React from "react";

export default function Header(){
    return(
        <div className="header--container">
            <span className="header--text-title">
                <img className="header--troll-face" alt="troll face" src={require("./troll-face.png")}></img>
                Meme Generator
            </span>
            <span className="header--text-sub-title">React Course - Project 3</span>
        </div>
    )
}