import React from "react";

export default (props) => {
    const {title, genre, _id} = props;


    return (
        <div className="movie">
            <h1>{title}</h1>
            <p>{genre}</p>
            <button 
                className="delete-btn"
                onClick={() => props.deleteMovie(_id)}
                >Delete</button>
        </div>
    )
}