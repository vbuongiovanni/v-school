import React, {useState, useEffect} from "react"
import {get} from "axios"

export default function RandomColor(){
    
    const [color, setColor] = useState("")
    const [initiator, setInitiator] = useState(0)

    useEffect(() => {
         get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(res => res.data.colors[0])
            .then(data => setColor(`${"#"}${data.hex}`))
    }, [initiator])

    const styles = {
        backgroundColor: color
    }

    const handleColorChange = (e) => {
        e.preventDefault();
        setInitiator(prevValue => prevValue++);
    }

    return (
        <>
            <div className="color-container" style={styles}>
                
            </div>
            <button>Get new random color</button>
        </>
    )
}