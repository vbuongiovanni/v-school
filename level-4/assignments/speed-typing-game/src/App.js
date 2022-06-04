import React from "react";
import "./style.css";
import UseGameLogic from "./useGameLogic";

export default function App() {

    const {
            textContent, 
            isGameRunning,
            timeRemaining,
            wordCount,
            textAreaRef,
            handleTextAreaChange,
            startGame
        } = UseGameLogic(30)

    return (
        <>
            <h1>How fast can you type!?</h1>  
            <textarea 
                value={textContent}
                onChange={handleTextAreaChange}
                disabled={!isGameRunning}
                ref={textAreaRef}
            />
            <h4>Time Remaining: {timeRemaining}</h4>
            <button onClick={startGame} disabled={isGameRunning}>Start</button>
            <h1>Word Count: {wordCount}</h1>
        </>       
    )
}
