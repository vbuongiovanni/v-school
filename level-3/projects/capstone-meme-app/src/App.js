import React, {useState} from "react";
import "./style.css";
import Header from "./components/Header"
import Meme from "./components/Meme"
import MemeLibrary from "./components/MemeLibrary";

export default function App(){

    // set state of nav location - binary of in meme library
    const [inLibrary, setInLibrary] = useState(false)

    // set state of memeList - array representing saved memes
    const [memeList, setMemeList] = useState([{}])

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
            <Header inLibrary={inLibrary} {...navHandler}/>
            {inLibrary ? <MemeLibrary memeList={memeList} /> : <Meme {...{memeList, setMemeList}} />}
        </>        
    )
}