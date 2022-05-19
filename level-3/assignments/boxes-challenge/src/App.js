import React, {useState} from "react";
import Boxes from "./boxes";
import Box from "./components/Box"
import "./style.css";

export default function App(){
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */
    
    const [squares, setSquares] = useState(Boxes);

    /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */

    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */

    const toggle = (id) => {
        /**
        * Challenge: use setSquares to update the
        * correct square in the array.
        */
         setSquares(prevState => {
            return prevState.map((box) => {
                return box.id === id ? {...box, on : !box.on} : box
            })
         })
    }

    return (
        <main>
            {squares.map(square => <Box key={square.id} id={square.id} on={square.on} handler={toggle}/>)}
        </main>
    )   
}