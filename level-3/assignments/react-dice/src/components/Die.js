import React from "react";

export default function Die(props){

    const selectedStatus = props.isSelected ? "selected " : "";
    const fontColor = props.isSelected ? "white" : "black";
    const diceColor = props.isSelected ? "black" : "white";

    const getContent = diceValue => {
        const output = [];
        for (let i = 0; i < diceValue; i++){
            output.push(<span key={i} onClick={props.spanHandler}>&#8226;</span>)
        }
        return output
    }
    
    return (
        <div 
            className={`die ${selectedStatus}dice-value-${props.value}`} 
            id={`dice-${props.id}`}
            style={{backgroundColor: diceColor, color: fontColor}}
            onClick={props.diceHandler}>
                {getContent(props.value)}
        </div>
    )

}