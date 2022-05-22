import React from "react";

export default function Header(props){

    

    return(
        <div className="header--container">
            <span className="header--text-title">
                <img className="header--troll-face" alt="troll face" src={require("./troll-face.png")}></img>
                {props.inLibrary ? "Meme Library" : "Meme Generator"}
            </span>
            <span className="header--text-sub-title">Capstone Project</span>
        </div>
    )
}