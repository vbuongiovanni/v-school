import React from "react";

export default function Count(props){

    const {number} = props;

    console.log("Count component has rendered.")

    return (
        <div className="counter--count">
            <h1>{number}</h1>
        </div>
    )
}