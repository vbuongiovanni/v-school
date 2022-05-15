import React, {useState} from "react";
import "./style.css";



// How to declare state? 
    // React's useState() method! The first parameter is the default value.
    // note that useState() returns an array. This can be tackled using array destructuring
    
    // note that useState is a part of the React library... it is common to destructure this method during initial import.

export default function App() {

    /**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */
    // const state = useState("Yes");
    // ...
    //     <h1>{state[0]}</h1>
    // ...

    // This is clunky, because useState() returns an array of length two (default value, func). this can be handled using array destructuring

    // const [isImportant, func] = useState("Yes");

    // Note that the isImportant variable is immutable and cannot be changed in a traditional manner... instead, we have to use the func shown in the original useState() call by declaring a setter
    // e.g., running 'setIsImportant("no")' would change the isImportant to "No"
    // note that we do NOT have to implement any code for setIsImportant.

    const [isImportant, setIsImportant] = useState("Yes");
    
    /**
     * Challenge: 
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("No")
     * 2. add a click event listener to the div.state--value
     *    that runs `handleClick` when the div is clicked.
     */

    function handleClick() {
        switch(isImportant){
            case "Yes":
                setIsImportant("no...")
                break;
            case "no...":
                setIsImportant("Yes")
                break;
        }
    }
        

    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div onClick={handleClick} className="state--value">
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}