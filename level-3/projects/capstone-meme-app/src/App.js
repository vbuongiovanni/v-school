import React, {useState} from "react";
import "./style.css";
import Header from "./components/Header"
import Meme from "./components/Meme"

export default function App(){

    const [inLibrary, setInLibrary] = useState(false)

    const toggleScreen = () => {
        setInLibrary(prevLibrary => !inLibrary)
    }

    return (
        <>
            <Header headerType={inLibrary} handlePageChange={toggleScreen}/>
            <Meme />
        </>        
    )
}