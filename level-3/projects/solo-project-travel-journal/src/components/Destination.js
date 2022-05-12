import React from "react"

export default function Destination(props){
    const {title, location, googleMapsUrl, startDate, endDate, image, description} = props;
    return (
        <div className="destination--card">
            <img className="destination--image" alt="example image of destination" src={require(`../images/destination-images/${image}`)}></img>
            <div className="destination--content">
                <span className="destination--location">
                    <img className="destination-map-logo" alt="decorative image" src={require("../images/destination-logo.png")}></img>
                    <span className="destination--location-title">{location}</span>
                    <a className="destination--location-map-url" href={googleMapsUrl}>View on Google Maps</a>
                </span>
                <h1 className="destination--title">{title}</h1>
                <h4 className="destination--dates">{startDate} - {endDate}</h4>    
                <span className="destination--description">{description}</span>
            </div>
        </div>
    )
} 
