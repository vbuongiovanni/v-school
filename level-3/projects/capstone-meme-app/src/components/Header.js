import React from "react";

export default function Header(props){

    const {navToMemeGenerator, navToLibrary} = props

    return(
        <div className="header--container">
            <span className="header--text-title">
                <img className="header--troll-face" alt="troll face" src={require("./troll-face.png")}></img>
                <span onClick={navToMemeGenerator} className={props.inLibrary ? "inactive" : "active"}>Meme Generator</span>
                <span onClick={navToLibrary} className={props.inLibrary ? "active" : "inactive"}>Meme Library</span>
            </span>
            <span className="header--text-sub-title">Capstone Project</span>
        </div>
    )
}