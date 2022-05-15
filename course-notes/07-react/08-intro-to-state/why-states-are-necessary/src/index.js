import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function App(){
    /**
     * Challenge 1: Map over the thingsArray to generate
     * a <p> element for each item and render them on the page
     * below the button
     */
    
    const thingsArray = ["Thing 1", "Thing 2"]
    
    const things = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    /**
     * Challenge 2: Add an event listener to the button so when
     * it is clicked, it adds another thing to our array
     */

    const handleEvent = () => thingsArray.push(`Thing ${thingsArray.length + 1}`)

    // the UI does NOT however update with the changes... this is because we need to incorporate React's 'state' to enable dynamic updating of the UI

    return(
        <div>
            <button onClick={handleEvent}>Add things</button>
            {things}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))