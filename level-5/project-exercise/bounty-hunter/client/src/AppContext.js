import React, {useState, createContext} from "react";
import axios from "axios";

const appContext = createContext();

const AppContextProvider = (props) => {

    // app-wide state:
    const [bounties, setBounties] = useState([]);

    // CRUD functions:
    const getBounties = async () => {
        const response = await axios.get("/bounty")
            .catch(err => console.log(err));
        const bountyData = response.data;
        setBounties(bountyData);
    }

    const postBounty = async (newBounty) => {
        const response = await axios.post("/bounty", newBounty)
            .catch(err => console.log(err));
        const bountyData = response.data;
        setBounties(prevBounties => [...prevBounties, bountyData]);
    }

    const deleteBounty = async (bountyId) => {
        const response = await axios.delete(`/bounty/${bountyId}`)
            .catch(err => console.log(err));
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId));
    }
    const editBounty = async (editBounty, bountyId) => {
        const response = await axios.put(`/bounty/${bountyId}`, editBounty)
            .catch(err => console.log(err));
        console.log(response)
        const bountyData = response.data;
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : bountyData));
    }

    const context = {
        bounties,
        getBounties,
        postBounty,
        deleteBounty,
        editBounty,
    }

    return (
        <appContext.Provider value={context}>
            {props.children}
        </appContext.Provider>
    )
}

export {appContext, AppContextProvider}