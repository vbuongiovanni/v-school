import React, {useState} from "react";
import "./style.css";

export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    const [currentCount, setCurrentCount] = useState(0);


    // note that although this works, it doesn't follow best practices. It is better to use a callback function
    // const add = () => setCurrentCount(currentCount + 1);
    // const minus = () => setCurrentCount(currentCount - 1);

    // whenever you need to use the old value of the state to determine the new value of the state, we should use a callback function:
        // whenever you pass a callback function into a State's setter function, react will, by default, pass the old value fo the state into the callback function:

    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
        
    const add = () => {
        setCurrentCount(prevCount => prevCount + 1)
    }
    const minus = () => {
        setCurrentCount(prevCount => prevCount - 1)
    }
    const double = () => setCurrentCount(prevCount => prevCount * 2)
    const halve = () => setCurrentCount(prevCount => prevCount / 2)
        


    return (
        <div className="counter">
            <button onClick={double} className="counter--double">X2</button>
            <button onClick={halve} className="counter--half">/2</button>
            <button onClick={minus} className="counter--minus">–</button>
            <div className="counter--count">
                <h1>{currentCount}</h1>
            </div>
            <button onClick={add} className="counter--plus">+</button>
        </div>
    )
}