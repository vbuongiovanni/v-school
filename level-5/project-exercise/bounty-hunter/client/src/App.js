import React, {useEffect, useContext} from "react";
import Bounties from "./components/Bounties";
import UserForm from "./components/UserForm";
import {appContext} from "./AppContext";
import "./styles.css";

export default () => {
    
    const context = useContext(appContext);

    const {getBounties, postBounty, bounties} = context;

    useEffect(() => {
        getBounties();
    }, []) 
    
    return (
        <>
            <nav>
                <UserForm submitFunction={postBounty} buttonText={"Add Bounty"} className="main-form"/>
            </nav>
            <main className="bounties-container">
                <Bounties bounties={bounties}/>
            </main>
        </>
    )
}