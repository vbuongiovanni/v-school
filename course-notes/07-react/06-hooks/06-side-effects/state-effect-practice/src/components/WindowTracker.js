import React, {useEffect, useState} from "react"

export default function WindowTracker(props) {

    /**
     * Challenge:
     * 1. Create state called `windowWidth`, default to 
     *    `window.innerWidth`
     * 2. When the window width changes, update the state
     * 3. Display the window width in the h1 so it updates
     *    every time it changes
     */
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    // ** Example of a Memory Leak **
/* 
    There is a problem with this design - since we are running window.addEventListener(), a new event listener
    is added to the DOM, and since WindowTracker is mounted/dismounted by the toggle button, we will get an error
    if the eventListener runs while WindowTracker is dismounted.

    The Solution? Create a cleanup function.

 */


    useEffect(() => {
        const watchWidth = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth) 
            
        // return function - clean up function:
        return () => {
            console.log("cleaning up effect - removeEventListener()")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
