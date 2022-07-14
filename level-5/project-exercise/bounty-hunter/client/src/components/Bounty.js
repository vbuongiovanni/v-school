import React, { useState, useContext } from "react";
import UserForm from "./UserForm";
import { appContext } from "../AppContext";

export default (props) => {
    const context = useContext(appContext);
    const {deleteBounty, editBounty} = context;
    const {firstName, lastName, living, bountyAmount, type, _id} = props;
    
    const [inEditMode, setInEditMode] = useState(false)

    const handleEditModeChange = () => {
        setInEditMode(inEditMode => !inEditMode);
    }

    return (
        <div className="bounty-card">
            {!inEditMode ? 
            <>
                <h2>{`${firstName} ${lastName}`}</h2>
                <h3 className="label-type">Type: {type}</h3>
                <h4 className="label-living">Status: {living ? "Alive" : "Deceased"}</h4>
                <h4 className="label-bounty">Bounty Amount: ${bountyAmount}</h4>
                <div className="bounty-card-buttons">
                    <button onClick={handleEditModeChange}>
                        Edit
                    </button>
                    <button onClick={() => deleteBounty(_id)} className="delete-button">
                        Delete
                    </button>
                </div>
            </> : 
            <>
                <UserForm
                    submitFunction={editBounty}
                    className="bounty-form"
                    _id={_id}
                    buttonText="Save Changes"
                    toggleEditMode={handleEditModeChange}
                    {...props}
                    />
               <div className="bounty-card-buttons in-edit">
                    <button onClick={handleEditModeChange}>
                        Cancel
                    </button>
                </div>
            </>
            }
        </div>
    )

}