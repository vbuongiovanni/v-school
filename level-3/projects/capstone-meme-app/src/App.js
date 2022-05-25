import React, {useState} from "react";
import "./style.css";
import Header from "./components/Header"
import MemeGenerator from "./components/MemeGenerator"
import MemeLibrary from "./components/MemeLibrary";

export default function App(){

    // set state of nav location - binary of in meme library
    const [inLibrary, setInLibrary] = useState(false)

    // set state of memeList - array representing saved memes
    const [memeList, setMemeList] = useState([])

    // set state of inEditMode - primarily used by the MemeLibrary but also impacts the navbar.
    const [inEditMode, setEditMode] = useState(false)
    
    // set handlers for header navigation
    const navToMemeGenerator = () => {
        setInLibrary(false)
    }
    const navToLibrary = () => {
        setInLibrary(true)
    }

    // consolidate handlers for Header component
    const navProps = {navToMemeGenerator, navToLibrary, inEditMode, inLibrary}

    // consolidate handlers for Header component
    const memeLibraryProps = {memeList, setMemeList, inEditMode, setEditMode}

    return (
        <>
            <Header {...navProps}/>
            {inLibrary ? 
                <MemeLibrary {...memeLibraryProps} /> : 
                <MemeGenerator setMemeList={setMemeList} />}
        </>        
    )
}