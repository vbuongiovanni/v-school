import React, {useState, useEffect} from "react";
import data from "./memesData"

export default function Meme(){
    
    // declare state for meme and data

     const [meme, setMeme] = useState({
         randomImage : "http://i.imgflip.com/1bij.jpg",
         topText : "Top Text",
         bottomText : "Bottom Text",
        })

     const [allMemeImages, setAllMemeImages] = useState([])

     // declare function that will be tied to input fields, thereby making them controlled components

     const handleChange = (e) => {
         const {name, value} = e.target;
         setMeme(prevMeme => ({...prevMeme, [name] : value}))
     }

     // declare function that will pull a random meme from the local memesData.js

     const getMemeImage = (e) => {
        e.preventDefault();
        const memesArray = allMemeImages;
        const randomIndex = Math.floor((Math.random() * memesArray.length));
        setMeme(prevMeme => {
            return {...prevMeme, randomImage : memesArray[randomIndex].url}
        })
     } 

     // leverage useEffect() to make API call.

     useEffect(() => {
         fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
     }, [])

    return(
        <main>
            <form className="main--container">
                <div className="main--input-container">
                    <input className="main--input-text"
                        type="text"
                        placeholder="Top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input className="main--input-text"
                        type="text"
                        placeholder="Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
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