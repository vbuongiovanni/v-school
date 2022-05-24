import React, {useState} from "react";
import "./style.css";
import Header from "./components/Header"
import Meme from "./components/Meme"
import MemeLibrary from "./components/MemeLibrary";

export default function App(){

    // set state of nav location - binary of in meme library
    const [inLibrary, setInLibrary] = useState(false)

    // set state of memeList - array representing saved memes
    const [memeList, setMemeList] = useState([])

    // set state of inEditMode - this is primarily used by the MemeLibrary component.
    // However, it is included in the App component, since it impacts the navbar.
    const [inEditMode, setEditMode] = useState(false)
    

    // set handlers for header navigation

    const navToMemeGenerator = () => {
        setInLibrary(false)
    }
    const navToLibrary = () => {
        setInLibrary(true)
    }

    const navHandler = {navToMemeGenerator, navToLibrary}

    return (
        <>
            <Header inLibrary={inLibrary} inEditMode={inEditMode} {...navHandler}/>
            {inLibrary ? 
                <MemeLibrary {...{memeList, setMemeList, inEditMode, setEditMode}} /> : 
                <Meme {...{memeList, setMemeList}} />}
        </>        
    )
}