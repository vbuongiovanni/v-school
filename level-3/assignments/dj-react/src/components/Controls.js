import react from "react";

export default function(props){
    
    const {
        handleDJSmall, handlePartyDJ,
        handleProDJLeft, handleProDJRight,
        handleBigTimeDJTopLeft, handleBigTimeDJTopRight, handleBigTimeDJBottomLeft, handleBigTimeDJBottomRight,
        handlePlayMusic} = props;

    return(
        <div className="controls-container">
            <button onClick={handleDJSmall}>DJ Small</button>
            <button onClick={handlePartyDJ}>Party DJ</button>
            <div className="professional-dj-container">
                <button onClick={handleProDJLeft}>Professional DJ - Left</button>
                <button onClick={handleProDJRight}>Professional DJ - Right</button>
            </div>
            <div className="big-time-dj-container">
                <button onClick={handleBigTimeDJTopLeft}>Big Time DJ - Top Left</button>
                <button onClick={handleBigTimeDJTopRight}>Big Time DJ - Top Right</button>
                <button onClick={handleBigTimeDJBottomLeft}>Big Time DJ - Bottom Left</button>
                <button onClick={handleBigTimeDJBottomRight}>Big Time DJ - Bottom Right</button>
            </div>
            <button onClick={handlePlayMusic}>One of the Greats! - Make Noise</button>
        </div>
    )
}