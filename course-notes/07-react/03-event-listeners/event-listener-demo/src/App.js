import React from "react";

// In addition to adding eventListener() to JS objects via DOM manipulations, they can also be added within the HTML doc with the following:
// <button onClick="someFunction()">Click me</button>
// React uses a similiar framework - see below:

export default function App(){
    const handleClick = ()=> {
        console.log("An event was triggered - you pressed the button!")
    }
    // note that we can add the function to the <button> element, we just need to wrap it in curly brackets. Of course, you don't want to add parentheses. 
    // you must pass the function as a callback, since it will be called later on when the event occurs.
    
    
    /**
     * Challenge: 
     * Log something to the console when the mouse hovers over the image
     */

    const handleHover = ()=> {
        console.log("You're hovering over the image!!")
    }

    return (
        <div className="container">
            <img onMouseOver={handleHover} onMouseMove={handleHover} src="https://picsum.photos/640/360" />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
