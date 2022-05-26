import React, {useState} from "react"

export default function Form() {

    // sub-par solution - this might be okay for 1-3 inputs, but it is not scalable... instead, we should use a state object:

    // const [firstName, setFirstName] = React.useState("");
    
    // const handleFirstName = (event) => {
        /**
         * Challenge: update the firstName state on every keystroke
         */
    //     setFirstName(event.target.value)
    // }
    /**
     * Challenge: Track the applicant's last name as well
     */
    // const [lastName, setLastName] = React.useState("")

    // const handleLastName = (event) => {
    //     setLastName(event.target.value)
    // }


    // The following is more scalable, since we can simply add new fields to the formData object. Note that handleChange is generalized to work with all fields.

    /**
     * Challenge: add an email field/state to the form
     */


    const [formData, setFormData] = useState({
        firstName : "", 
        lastName : "", 
        email : "", 
        comments : "", 
        isFriendly : true,
        employment : "",
        favColor : ""
    })

    const handleChange = event => {
        const {name, value, type, checked} = event.target; // bringing in type and checked to account for checkbox
        setFormData(prevFormData => {
            // we can use computed names to update the formData object - see below
            return {...prevFormData, [name] : type === "checkbox" ? checked : value}  // adding in ternary operator 
        })
    }

    console.log(formData)

    // after adding 'formData.value' to the inputs 'value', the components are 'controlled', meaning there is a single source of truth.

    /**
     * Challenge: Add a textarea for "comments" to the form
     * Make sure to update state when it changes.
     */

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Mock-up - data sent to API")
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
            />
            <input
                type="text"
                placeholder="Email Address"
                name="email"
                onChange={handleChange}
                value={formData.email}
            />
            <br/>
            <br/>
            <textarea 
                placeholder="Comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
            />
            <br/>
            <input 
                type="checkbox"
                name="isFriendly"
                id="isFriendly"
                onChange={handleChange}
                checked={formData.isFriendly}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br/>
            <fieldset>
                <legend> Current Employment Status</legend>
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    onChange={handleChange}
                    checked={formData.employment === "unemployed"}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    onChange={handleChange}
                    checked={formData.employment === "full-time"}
                />
                <label htmlFor="full-time">Full Time</label>
                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    onChange={handleChange}
                    checked={formData.employment === "part-time"}
                />
                <label htmlFor="part-time">Part Time</label>
            </fieldset>

            <br/>
            <label htmlFor="favColor">Favorite Color</label>
            <br/>
            <select
                id="favColor" 
                name="favColor"
                value={formData.favColor}
                onChange={handleChange}
            >
                <option value="">--- Choose --- </option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <button>Submit</button>
        </form>
    )   
}