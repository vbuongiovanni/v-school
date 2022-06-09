import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./style.css";

function App(){

    

    /**
     * Challenge 1: Map over the thingsArray to generate
     * a <p> element for each item and render them on the page
     * below the button
     */
    // const thingsArray = ["Thing 1", "Thing 2"]
    //  const things = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    /**
     * Challenge 2: Add an event listener to the button so when
     * it is clicked, it adds another thing to our array
     */

    //  const handleEvent = () => thingsArray.push(`Thing ${thingsArray.length + 1}`)

    // THIS IS WHY WE NEED STATE IN REACT:
    // the UI does NOT however update with the changes... this is because we need to incorporate React's 'state' to enable dynamic updating of the UI.
    
    /**
     * Challenge 3 - COMPLEX STATE: ARRAYS: 
     * Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     */

     const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])
    
     function handleEvent() {
        setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${thingsArray.length + 1}`])
     }
     
     const things = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return(
        <div>
            <button onClick={handleEvent}>Add things</button>
            {things}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))