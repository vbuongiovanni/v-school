import React from "react";
import Pet from "./Pet";

export default function Friend(props){
    console.log(props)
    const {name, age, pets} = props
    const petList = pets.map(pet => <Pet key={pet.id} {...pet} />)
    
    return (
        <div className="friend-container">
            <div className="friend-detail">
                <p className="friend-container--name"><span className="label">Name: </span>{name}</p>
                <p className="friend-container--age"><span className="label">Age: </span>{age}</p>
            </div>       
            <p className="pet-header">{name}'s Pets:</p>     
            <ol className="pet-detail">
                {petList}
            </ol>
        </div>
    )
}

