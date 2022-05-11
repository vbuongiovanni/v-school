import React from "react";


export default function Card() {
    return (
        <div className="card">
            <img className = "card--image" src={require("../images/card/katie-zaferes.png")} alt="representation of card"></img>
            <p className="card--stats">
                <img className = "card--star-icon" src={require("../images/card/star.png")} alt="decorative star"></img>
                <span className="card--rating"> 5.0 </span>
                <span className="card--rating-count"> (6) </span>
                <span className="card--location"> USA </span>
            </p>
            <p className="card--title">Life lessons with Katie Zaferes</p>
            <p className="card--price-unit-text">
                <span className="card--price">From $136 </span> / person
            </p>
        </div>
    )
}
