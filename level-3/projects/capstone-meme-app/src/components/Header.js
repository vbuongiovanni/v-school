import React from "react";

export default function Header(props){

    // deconstruct props
    const {navToMemeGenerator, navToLibrary, inEditMode, inLibrary} = props

    return(
        <div className="header--container">
            <div className="header--text-title">
                <img className="header--troll-face" alt="troll face" src={require("./troll-face.png")}></img>
                {!inEditMode && <span onClick={navToMemeGenerator} className={inLibrary ? "inactive" : "active"}>Meme Generator</span>}
                {!inEditMode && <span onClick={navToLibrary} className={inLibrary ? "active" : "inactive"}>Meme Library</span>}
            </div>
            <span className="header--text-sub-title">Capstone Project</span>
        </div>
    )
}