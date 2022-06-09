import React, {useState, useEffect} from 'react'

export default function App(){

    // what is so special about using async functions with react? What's the big deal??

    // It creates an infinite loop. Example:

        // initialize state:
        const [starWarsData, setStarWarsData] = React.useState({})
        const [count, setCount] = React.useState(1)

        // run fetch
        /* // this is considered a 'side-effect' because it 1.) is reaching outside the React ecosystem and 2.) setting state.
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
            console.log("Component Rendered!")
        */
        
    
    // Step 1 - index.js runs and renders the App component, causing async fetch() to be executed to make the API call.
    // Step 2 - The result are then received by the App component, causing the App to return the data to index.js
    // Step 3 - Since setStarWarsData lives in state, as soon as the data is received the fetch function is ran again, causing the App component to rerender.
    // ... repeat infinitely....

    // the underlying issue is that async functions live on the top level of the component, above state... This is what is known as a side effect.


    // side effect - useEffect() applied

        // How to resolve this issue??? 
        
        // Step 1: move side-effect into the use 'useEffect' callback function. Note that if you dont add a second param to useEffect(), it works almost exactly like any other code except that it will
        // run after the component is rendered/rerendered.

    console.log("Component Rendered!")

    /**
     * Challenge: re-write the useEffect
     * It should run any time `count` changes
     * For now, just console.log("Effect function ran")
     */

    // useEffect(() => {
    //     console.log("Effect function ran")
    // }, [count])

    // useEffect(() => {
    //     fetch("https://swapi.dev/api/people/1")
    //         .then(res => res.json())
    //         .then(data => setStarWarsData(data))
    // }, [])

    /**
     * Challenge: Combine `count` with the request URL
     * so pressing the "Get Next Character" button will
     * get a new character from the Star Wars API.
     * Remember: don't forget to consider the dependencies
     * array!
     */

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])

    return (
        <div>
            <h2>Character Number: {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

