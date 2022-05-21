import React, {useState} from 'react'

export default function App(){

    // what is so special about using async functions with react? What's the big deal??

    // It creates an infinite loop. Example:

        // initialize state:
        const [starWarsData, setStarWarsData] = React.useState({})

        // run fetch

        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data))

        console.log("Component Rendered!")
    
    // Step 1 - index.js runs and renders the App component, causing async fetch() to be executed to make the API call.
    // Step 2 - The result are then received by the App component, causing the App to return the data to index.js
    // Step 3 - Since setStarWarsData lives in state, as soon as the data is received the fetch function is ran again, causing the App component to rerender.
    // ... repeat infinitely....

    // the underlying issue is that async functions live on the top level of the component, above state... This is what is known as a side effect.


    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

