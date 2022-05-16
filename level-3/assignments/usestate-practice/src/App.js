import React, {useState} from "react";



export default function App(){

    /* 
    Question 1 
    Pass in a new color of your choosing in place of the old one. We don't care what the previous color was
    */
        const [colorQ1, setColorQ1] = useState("pink")

        const q1Event = () => {
            setColorQ1("indigo")
        }
        

    /* 
    2. Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it's currently blue, set it back to pink.
    */    
        const [colorQ2, setColorQ2] = useState("pink")
        
        const q2Event = () => {
            setColorQ2(prevState => prevState === "pink" ? "blue" : "pink")
        }

    /* 
    3. Add a new person object to the following `people` array in state. You can hard-code a new object but it must be a person object with `firstName` and `lastName` properties.
    */    
        const [peopleQ3, setPeopleQ3] = useState([
            {
                firstName: "John",
                lastName: "Smith"
            }
        ])

        const q3Event = () => {
            setPeopleQ3(prevPeopleQ3 => [...prevPeopleQ3, {firstName: "Bill", lastName : "Shmuckatelli"}])
        }
        
    /*     
    4. Change the following state-setting functions to use an implicit return
    */
        const [colorsQ4, setColorsQ4] = useState(["pink", "blue"])

        const q41Event = () => {
            setColorsQ4(prevColors => [...prevColors, "green"])
        }
        
        const [countObjectQ4, setCountObjectQ4] = useState({
            count: 0
        })

        const q42Event = () => {
            setCountObjectQ4(prevState => ({count: prevState.count + 1}))
        }

    /* 
    5. Update the following state to add an additional property `age` and set the value to `30`, ensuring that the other properties are not overwritten.
    */
        
        const [personQ5, setPersonQ5] = useState({
                firstName: "John",
                lastName: "Smith"
        })
        
        const q5Event = () => {
            console.log(personQ5)
            setPersonQ5(prevPersonQ5 => {
                const updatedPerson = prevPersonQ5;
                updatedPerson.age = 30;
                return updatedPerson;
            })
        }
        
    /*     
    6. What's wrong with the following state update?
    */    
        const [colorsQ6, setColorsQ6] = useState(["pink", "blue"])
        
        const q6Event = () => {
            setColorsQ6("green")
        }


    return (
        <>
            <div onClick={q1Event}>
                <h1>Question 1 - Current Value: {colorQ1}</h1>
            </div>
            <div onClick={q2Event}>
                <h1>Question 2 - Current Value: {colorQ2}</h1>
            </div>
            <div onClick={q3Event}>
                <h1>Question 3</h1>
                <ul>
                    {peopleQ3.map(person => <li>{person.firstName} {person.lastName}</li>)}
                </ul>
            </div>
            <div onClick={q41Event}>
                <h1>Question 4.1</h1>
                <ul>
                    {colorsQ4.map(color => <li>{color}</li>)}
                </ul>
            </div>
            <div onClick={q42Event}>
                <h1>Question 4.2 - Current Value: {countObjectQ4.count.valueOf()}</h1>
            </div>
            <div onClick={q5Event}>
                <h1>Question 5 - <i>see console</i></h1>
            </div>
            <div onClick={q6Event}>
                <h1>Question 6</h1>
                <ul>
                    <li>{colorsQ6}</li>
                </ul>
                <p>It overwrites the previous state, an array of strings ('["pink", "blue"]'), with the single string value 'green'</p>
            </div>
        </>
    )
}
