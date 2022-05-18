import React, {useState} from "react";
import "./style.css";
import Controls from "./components/Controls"
import Square from "./components/Square"
import discoSounds from "./components/sounds/disco.mp3"

export default function(){

    // set state IsMuted for music:
    const [isMuted, setAudioPlay] = useState(true);
    // set state of arrayColors for buttons
    const [colors, setColor] = useState(["white", "white", "white", "white"]);
    // set randomColorArray for Big Time DJ implementation 
    const randomColorArray = ["#FAEBD7", "#00FFFF", "#7FFFD4", "#F0FFFF", "#F5F5DC", "#571583", "#fef100", "#ff4ea9", "#02ff01", "#f50912", "#207bef"]
    

    const handleDJSmall = () => {
        setColor(colors.map(color => color === "white" ? "black" : "white"))
    }

    const handlePartyDJ = () => {
        setColor(prevColors => ["purple", "purple", prevColors[2], prevColors[3]])
    }

    const handleProDJLeft = () => {
        setColor(prevColors => [prevColors[0], prevColors[1], "blue", prevColors[3]])
    }

    const handleProDJRight = () => {
        setColor(prevColors => [prevColors[0], prevColors[1], prevColors[2], "blue"])
    }

    const handleBigTimeDJTopLeft = () => {
        const randomColor = randomColorArray[Math.floor(Math.random()*randomColorArray.length)];
        setColor(prevColors => [randomColor, prevColors[1], prevColors[2], prevColors[3]])
    }

    const handleBigTimeDJTopRight = () => {
        const randomColor = randomColorArray[Math.floor(Math.random()*randomColorArray.length)];
        setColor(prevColors => [prevColors[0], randomColor, prevColors[2], prevColors[3]])
    }

    const handleBigTimeDJBottomLeft = () => {
        const randomColor = randomColorArray[Math.floor(Math.random()*randomColorArray.length)];
        setColor(prevColors => [prevColors[0], prevColors[1], randomColor, prevColors[3]])
    }

    const handleBigTimeDJBottomRight = () => {
        const randomColor = randomColorArray[Math.floor(Math.random()*randomColorArray.length)];
        setColor(prevColors => [prevColors[0], prevColors[1], prevColors[2], randomColor])
    }

    const handlePlayMusic = () => {
        setAudioPlay(isMutedPrev => !isMutedPrev);
    }

    const eventHandlers = {
        handleDJSmall, handlePartyDJ, 
        handleProDJLeft, handleProDJRight, 
        handleBigTimeDJTopLeft, handleBigTimeDJTopRight, handleBigTimeDJBottomLeft, handleBigTimeDJBottomRight,
        handlePlayMusic};

    return (
        <>
            <div className="square-container">
                {colors.map(squareColor => <Square className="dj-square" color={squareColor}/>)}
            </div>
            <Controls {...eventHandlers}/>
            <audio src={discoSounds} autoPlay={true} muted={isMuted}></audio>
        </>        
    )
}