import React from "react";

export default function Pet(props){
    const {name, breed} = props;

    return (
        <li className="pet-item">
            <div>
                <p className="pet-item--name"><span className="list-label">Name: </span>{name}</p>
                <p className="pet-item--breed"><span className="list-label">Breed: </span>{breed}</p>
            </div>
        </li>
    )

}
