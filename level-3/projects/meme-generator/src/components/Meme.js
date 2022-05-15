import React from "react";
import data from "./memesData"

export default function Meme(){
     /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
    
     let memeImage = require("./memeimg.png");

     const getMemeImage = (e) => {
        e.preventDefault();
        const memesArray = data.data.memes;
        let randomIndex = Math.floor((Math.random() * memesArray.length));
        memeImage = memesArray[randomIndex].url;
        console.log(memeImage);
     } 

    return(
        <main>
            <form className="main--container">
                <div className="main--input-container">
                    <input className="main--input-text" type="text" placeholder="Shut up"/>
                    <input className="main--input-text" type="text" placeholder="and take my money"/>
                </div>
                <button onClick={getMemeImage} className="main--button">
                    <span>Get a new meme image 🖼</span>
                </button>
                <div className="main--display-container">
                    <img className="main--meme-display" src={memeImage}></img>
                    <div className="main--meme-text-1">
                        <span id="meme-text-top">Shut up</span>
                    </div>
                    <div className="main--meme-text-2">
                        <span id="meme-text-bottom">And take my money</span>
                    </div>
                </div>
            </form>
        </main>
    )
}