import React, {useState, useContext} from "react";
import { appContext } from "../AppContext";

const UserForm = (props) => {
    
    const context = useContext(appContext);
    const {submitFunction, toggleEditMode, className, buttonText, firstName, lastName, living, type, bountyAmount, _id} = props;

    const initFormValues = {
        firstName : firstName || "",
        lastName : lastName || "",
        living : living === undefined ? true : living,
        type : type || "Jedi",
        bountyAmount : bountyAmount || ""
    }

    const [userInput, setUserInputs] = useState(initFormValues)

    const inputHandler = (e) => {
        let {name, value} = e.target;
        if (name === "living") {
            value = value === "true" ? true : false;
        }
        setUserInputs(prevInputs => ({...prevInputs, [name] : value}));
    }

    const submitForm = (e) => {
        e.preventDefault();
        submitFunction(userInput, _id);
        setUserInputs(initFormValues);
        toggleEditMode();
    }

    return (
        <form onSubmit={submitForm} className={className}>
            <div className="name-input-div">
                <input
                    type="text"
                    name="firstName"
                    className="name-input"
                    placeholder="First Name"
                    value={userInput.firstName}
                    onChange={inputHandler}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    className="name-input"
                    placeholder="Last Name"
                    value={userInput.lastName}
                    onChange={inputHandler}
                />
            </div>

            <div className="input-div">
                <label htmlFor="type" className="label-type">Type: </label>
                <select
                    name="type"
                    value={userInput.type}
                    onChange={inputHandler}
                    >
                    <option value="Jedi">Jedi</option>
                    <option value="Sith">Sith</option>
                </select>
            </div>
            <div className="input-div">
                <label htmlFor="living" className="label-living">Status: </label>
                <select
                    name="living"
                    value={userInput.living}
                    onChange={inputHandler}
                    >
                    <option value="false">Deceased</option>
                    <option value="true">Alive</option>
                </select>
            </div>
            <div className="input-div">
                <label htmlFor="bountyAmount" className="label-bounty">Bounty Amount: </label>
                <input
                    type="number"
                    name="bountyAmount"
                    min="0"
                    value={userInput.bountyAmount}
                    onChange={inputHandler}
                    required
                />
            </div>
            <button>{buttonText}</button>
        </form>
    )
}

UserForm.defaultProps = {
    toggleEditMode : () => {}
}

export default UserForm;