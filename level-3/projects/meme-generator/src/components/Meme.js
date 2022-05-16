import React, {useState} from "react";
import data from "./memesData"

export default function Meme(){
     /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
    
     const [meme, setMeme] = useState({
         randomImage : "http://i.imgflip.com/1bij.jpg",
         topText : "Top Text",
         bottomText : "Bottom Text",
        })

     const [allMemeImages, setAllMemeImages] = useState(data)

     const getMemeImage = (e) => {
        e.preventDefault();
        const memesArray = allMemeImages.data.memes;
        const randomIndex = Math.floor((Math.random() * memesArray.length));
        setMeme(prevMeme => {
            return {...prevMeme, randomImage : memesArray[randomIndex].url}
        })
     } 

    return(
        <main>
            <form className="main--container">
                <div className="main--input-container">
                    <input className="main--input-text" type="text" placeholder="Top text"/>
                    <input className="main--input-text" type="text" placeholder="Bottom text"/>
                </div>
                <button onClick={getMemeImage} className="main--button">
                    <span>Get a new meme image 🖼</span>
                </button>
                <div className="main--display-container">
                    <img className="main--meme-display" src={meme.randomImage}></img>
                    <div className="main--meme-text-1">
                        <span id="meme-text-top">{meme.topText}</span>
                    </div>
                    <div className="main--meme-text-2">
                        <span id="meme-text-bottom">{meme.bottomText}</span>
                    </div>
                </div>
            </form>
        </main>
    )
}