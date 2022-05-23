import React, {useState, useEffect} from "react";

export default function Meme(props){

    const {memeList, setMemeList} = props

    // declare state for meme and data

     const [meme, setMeme] = useState({
         randomImage : "http://i.imgflip.com/1bij.jpg",
         topText : "",
         bottomText : "",
         memeId : 0
        })

     const [allMemeImages, setAllMemeImages] = useState([])

     // declare function that will be tied to input fields, thereby making them controlled components

     const handleChange = (e) => {
         const {name, value} = e.target;
         setMeme(prevMeme => ({...prevMeme, [name] : value}))
     }

     // declare function that will pull a random meme from the local memesData.js

     const getMemeImage = (event) => {
        event.preventDefault();
        const memesArray = allMemeImages;
        const randomIndex = Math.floor((Math.random() * memesArray.length));
        setMeme(prevMeme => {
            return {...prevMeme, randomImage : memesArray[randomIndex].url}
        })
     } 

     // wrap API call in useEffect(). setting dependency array to empty array, since we should only need to get memes array once.

     useEffect(() => {
        async function getMemes() {
            const response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()
            setAllMemeImages(data.data.memes)
        }
        getMemes()
        
     }, [])

     // handler to save meme to memeList and clear inputs:

     console.log(memeList)
     
    const saveToLibrary = (event) => {
        event.preventDefault()
        setMemeList(prevMemeList => [...prevMemeList, meme])
        setMeme(prevMeme => {
            return {
                randomImage : "http://i.imgflip.com/1bij.jpg",
                topText : "",
                bottomText : "",
                memeId : memeList.length + 1}
        }
        )
    }

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
                    <span>Refresh image 🖼</span>
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
                <button onClick={saveToLibrary} className="main--button">
                    <span>Save Meme to Library</span>
                </button>
            </form>
        </main>
    )
}