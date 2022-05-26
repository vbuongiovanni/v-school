import React, {useState} from "react"
import ReactDOM from "react-dom"
import "./style.css"

export default function App(){
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */

    const [isGoingOut, setIsGoingOut] = useState(true);

    const handleEvent = () => {
        setIsGoingOut(prevState => !prevState);
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={handleEvent} className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}