import React, {useState} from "react";
import DiceBox from "./components/DiceBox";
import "./style.css"

export default function App() {

    const [diceValues, setDiceValues] = useState([1, 2, 3, 5, 6])
    const [diceSelection, setDiceSelection] = useState([false, false, false, false, false])
    const [rollNumber, setRollNumber] = useState(1)

    const handleRollDice = () => {
        const randomValues = diceValues.map(() => Math.floor(Math.random() * 6) + 1)
        if (rollNumber <= 3) {
            for (let i in diceValues) {
                randomValues[i] = diceSelection[i] ? diceValues[i] : randomValues[i];
            }
            setDiceValues(randomValues)
        } else {
            setDiceSelection([false, false, false, false, false]) 
            setDiceValues(randomValues)
        }
        setRollNumber(prevRollNumber => prevRollNumber + 1)
    }

    const diceSelectorDiv = (e) => {
        const clickedClassName = e.target.className;
        let clickedId = new Number(e.target.id.replace("dice-", ""));
        clickedId = clickedId.valueOf();
        if (clickedClassName.slice(0, 3) === "die") {
            setDiceSelection(prevSelections => {
                const newSelections = [...prevSelections];
                newSelections[clickedId] = !prevSelections[clickedId];
                return newSelections;
            })
        }
    }
    const diceSelectorSpan = (e) => {
        const clickedClassName = e.target.parentNode.className;
        let clickedId = new Number(e.target.parentNode.id.replace("dice-", ""));
        clickedId = clickedId.valueOf();
        if (clickedClassName.slice(0, 3) === "die") {
            setDiceSelection(prevSelections => {
                const newSelections = [...prevSelections];
                newSelections[clickedId] = !prevSelections[clickedId];
                return newSelections;
            })
        }
    }

    return (
        <>
            <DiceBox {...{diceValues, diceSelection, diceSelectorDiv, diceSelectorSpan}}/>
            <button onClick={handleRollDice}>Roll Dice</button>
        </>
    )
}