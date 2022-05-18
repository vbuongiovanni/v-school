import React, {useState} from "react";
import Die from "./Die";

export default function DieBox(props){

    const {diceValues, diceSelection, diceSelectorDiv, diceSelectorSpan} = props;
    const diceIndexArray = [0, 1, 2, 3, 4]

    return(
        <div className="dice-box">
            {diceIndexArray.map(index => {
                return (
                    <Die 
                    key={index}
                    id={index}
                    value={diceValues[index]}
                    isSelected={diceSelection[index]}
                    diceHandler={diceSelectorDiv}
                    spanHandler={diceSelectorSpan}
                />
                )
            })}
        </div>        
    )
}
