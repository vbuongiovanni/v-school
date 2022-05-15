import React, {useState} from "react";



export default function App(){

    /* 
    Question 1 
    Pass in a new color of your choosing in place of the old one. We don't care what the previous color was
    */
        const [colorQ1, setColorQ1] = useState("pink")
        setColorQ1("indigo")
        console.log("\n\nQuestion 1")
        console.log(colorQ1)

    /* 
    2. Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it's currently blue, set it back to pink.
        
    */    
        const [colorQ2, setColorQ2] = useState("pink")
        
        console.log("\n\nQuestion 2")
        console.log(colorQ2)
        setColorQ2(prevState => prevState === "pink" ? "blue" : "pink")
    /* 
    3. Add a new person object to the following `people` array in state. You can hard-code a new object but it must be a person object with `firstName` and `lastName` properties.
    */    
        const [peopleQ3, setPeopleQ3] = useState([
            {
                firstName: "John",
                lastName: "Smith"
            }
        ])
        console.log("\n\nQuestion 3")
        setPeopleQ3(prevPeopleQ3 => [...prevPeopleQ3, {firstName: "Bill", lastName : "Shmuckatelli"}])
        console.log(peopleQ3)
        
    /*     
    4. Change the following state-setting functions to use an implicit return
    */
        const [colorsQ4, setColorsQ5] = useState(["pink", "blue"])
        
        setColorsQ5(prevColors => [...prevColors, "green"])

        console.log("\n\nQuestion 4.1")
        console.log(colorsQ4)
        
        const [countObjectQ4, setCountObjectQ4] = useState({
            count: 0
        })

        setCountObjectQ4(prevState => {return {count: prevState.count + 1}})

        console.log("\n\nQuestion 4.2")
        console.log(countObjectQ4)

    /* 
    5. Update the following state to add an additional property `age` and set the value to `30`, ensuring that the other properties are not overwritten.
    */
        
        const [personQ5, setPersonQ5] = useState({
                firstName: "John",
                lastName: "Smith"
        })
        
        // setPersonQ5(1)
        
        console.log("\n\nQuestion 5")
        console.log(setPersonQ5)
    /*     
    6. What's wrong with the following state update?
    */    
        const [colorsQ6, setColorsQ6] = useState(["pink", "blue"])
        
        // setColorsQ6("green")

    const q3Render = peopleQ3.forEach(person => person.firstName + " " + person.lastName);
    
    console.log("\n\nQuestion 6")
    console.log(colorsQ6)


    return (
        <>
            <h1>Check the console!</h1>
        </>
    )
}