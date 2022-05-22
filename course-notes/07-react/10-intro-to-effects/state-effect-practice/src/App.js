import React, {useState, useEffect} from "react"
import WindowTracker from "./components/WindowTracker"
import "./style.css"

export default function App() {
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */

    const [show, setShow] = useState(true)

    const toggleShow = () => {
        setShow(prevShow => !prevShow)
    }
    
    return (
        <div className="container">
            <button onClick={toggleShow}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker show={show}/>}
        </div>
    )
}
