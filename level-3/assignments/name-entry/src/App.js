import React, {useState} from "react"
import "./style.css"

export default function App(){
/*
    Build a simple react app with:
        an input box
        an `<h1>`
        a button
        an ordered list. 
    The user will type names into the input box. When the user types in the input box, the `<h1>` should update to show the same text as the input box.
    When the user clicks the button, the value of the input box should be added to a running list of names that have been previous entered.
 */

    const [names, setNames] = useState([])
    
    // this is overkill since there is only one input.... but still a best practice, so I'll use it.
    const [formData, setFormData] = useState({nameInput : ""})
    
    
    const handleInputChange = (e) => {
        const {value, name} = e.target;
        setFormData({[name] : value})
    }

    const addFormData = (e) => {
        e.preventDefault()

        console.log([...names, formData.nameInput])

        setNames(prevNames => {
            return [...prevNames, formData.nameInput];
        })
    }

    // renders list - this can be converted to a one-liner w/ .map(), but without adding a key-value...
    // I am going to opt to take the more complex route to adhere to react best practices.
    const renderList = () => {
        const listDetails = names.map(name => ({name}));
        for (let i = 0; i < listDetails.length; i++) {
            listDetails[i] = {...listDetails[i], id : i}
        }
        return listDetails.map(name => <li key={name.id}>{name.name}</li>);
    }

    return (
        <>
            <form onSubmit={addFormData}>
                <input 
                    name="nameInput"
                    placeholder="Enter Name"
                    value={formData.nameInput}
                    onChange={handleInputChange}
                />
                <br/>
                <button>Add Name to List</button>
            </form>
            <h1>{formData.nameInput}</h1>
            <ul>
                {renderList()}
            </ul>
        </>
    )
}
