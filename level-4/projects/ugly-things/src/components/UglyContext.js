import React, {createContext, useState, useEffect} from "react";
const axios = require("axios").default

const UglyContext = createContext();

const UglyContextProvider = props => {

    const USER_NAME = "vinceb";
    const baseUrl = `https://api.vschool.io/${USER_NAME}/thing`;

    // set state

        const [uglyData, setUglyData] = useState([
        ])
    
    // set effect to handle initial API call
        useEffect(() => {
            axios.get(baseUrl)
                .then(res => setUglyData(res.data))
                .catch(err => console.log(err))
            console.log("api called!")

        }, [uglyData.length])
    
    // set state for list entries that are in edit mode
        const [inEdit, setInEditMode] = useState(false)

    // handler to delete image from API
        const handleDelete = event => {
            event.preventDefault()
            const _id = event.target.name;
            axios.delete(`${baseUrl}/${_id}`)
                .then(res => console.log(res))
                .catch(err => console.log(err))
            setUglyData([])
            console.log("api called! - DELETE request")
        }
        
    // create helper function - will take one object and post it to API
        const postUglyEntry = requestData => {
            axios.post(baseUrl, requestData)
                .then(res => console.log(res))
                .catch(err => console.log(err))
            setUglyData([])
            console.log("api called! - POST request")
        }

    // create helper function - will take one object and post it to API
        const putUglyEntry = (_id, requestData) => {
            axios.put(`${baseUrl}/${_id}`, requestData)
                .then(res => console.log(res))
                .catch(err => console.log(err))
            setUglyData([])
            console.log("api called! - Put request")
        }



    return (
        <UglyContext.Provider
                value={{
                    uglyData,
                    setUglyData,
                    inEdit,
                    handleDelete,
                    postUglyEntry,
                    putUglyEntry,
                    setInEditMode,
                }}>
            {props.children}
        </UglyContext.Provider>
    )
}

export {UglyContext, UglyContextProvider}