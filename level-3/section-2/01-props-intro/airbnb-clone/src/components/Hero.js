import React from "react";
import "../style.css";

export default function Hero(){
    return (
        <div className="hero">
            <img className="hero--image-grid" src={require("../images/photo-grid.png")} alt="various images - decorative"></img>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>        
    )
}
