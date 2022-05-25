import React, {useState, useEffect} from "react";

export default function Meme(props){

    // deconstruct props:
    const {setMemeList} = props

    // initialize state for meme and data
    const [meme, setMeme] = useState({
        randomImage : "http://i.imgflip.com/1bij.jpg",
        topText : "",
        bottomText : "",
        memeId : `${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}`
    })

    // initialize state for meme data - will be filled using api.imgflip.com
    const [allMemeImages, setAllMemeImages] = useState([])

    // for message transition: 
    const [inProp, setInProp] = useState(false)


    // useEffect() w/ nested async function to make API call, handle promises and setAllMemeImages 
    // dependency array is left empty, so useEffect will run nested async one time (after initial render)
    useEffect(() => {
        async function getMemes() {
            const response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()
            setAllMemeImages(data.data.memes)
        }
        getMemes()
    }, [])

    // handler to synchronize meme state & UI - makes active components
    const handleChange = (e) => {
        const {name, value} = e.target;
        setMeme(prevMeme => ({...prevMeme, [name] : value}))
    }

    // handler that will draw a random meme from allMemeImage, 
    // then add it to meme state along with
    // unique id.
    const getMemeImage = (event) => {
        event.preventDefault();
        const memesArray = allMemeImages;
        const randomIndex = Math.floor((Math.random() * memesArray.length));
        const uniqueId = `${memesArray[randomIndex].id}-${Math.floor(Math.random() * 10000)}`
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage : memesArray[randomIndex].url,
                memeId : uniqueId}
        })
    } 

    // handler to add meme to memeList, then clear inputs:
    const saveToLibrary = (event) => {
        event.preventDefault()
        setMemeList(prevMemeList => [...prevMemeList, meme])
        const uniqueId = `${meme.memeId.split("-")[0]}-${Math.floor(Math.random() * 10000)}`
        setMeme(prevMeme => {
            return {
                ...prevMeme, 
                topText : "",
                bottomText : "",
                memeId : uniqueId}
        })
        setInProp(true)
    }

    return(
        <main className="component-container">
            <form className="meme--container component-container--content">
                <div className="page--header">
                    <h1>Meme Generator</h1>
                </div>
                <div className="meme--input-container">
                    <input
                        className="meme--input-text"
                        type="text"
                        placeholder="Top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        className="meme--input-text"
                        type="text"
                        placeholder="Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={getMemeImage} className="control-button">
                    Refresh image 🖼
                </button>
                <div className="meme--display-container">
                    <img className="meme-display" src={meme.randomImage}></img>
                    <div className="meme-text-container-top">
                        <span className="meme-text focus-meme-text">{meme.topText}</span>
                    </div>
                    <div className="meme-text-container-bottom">
                        <span className="meme-text focus-meme-text">{meme.bottomText}</span>
                    </div>
                </div>
                <button onClick={saveToLibrary} className="control-button">
                    Save Meme to Library
                </button>
            </form>
        </main>
    )
}