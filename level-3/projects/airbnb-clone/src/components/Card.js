import React from "react";


export default function Card(props) {

    const {title, price, coverImg : img, stats, location, openSpots} = props.item;
    
    let reviewCount = stats.reviewCount
    let rating = stats.rating

    let badgeText; 
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            <img className = "card--image" src={require("../images/card/" + img)} alt="representation of experience"></img>
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <p className="card--stats">
                <img className = "card--star-icon" src={require("../images/card/star.png")} alt="decorative star"></img>
                <span className="card--rating"> {rating} </span>
                <span className="card--rating-count"> ({reviewCount}) </span>
                <span className="card--location"> {location} </span>
            </p>
            <p className="card--title">{title}</p>
            <p className="card--price-unit-text">
                <span className="card--price">From ${price} </span> / person
            </p>
        </div>
    )

}
