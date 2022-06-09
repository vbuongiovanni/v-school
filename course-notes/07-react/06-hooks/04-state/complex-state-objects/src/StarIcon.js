import React from "react";

export default function StarIcon(props){
    const {isFilled, handleClick} = props;

    let starIcon = isFilled ? "star-filled.png" : "star-empty.png";

    return (
        <img 
        src={require(`./images/${starIcon}`)}
        className="card--favorite"
        onClick={handleClick}
        />
    )
}