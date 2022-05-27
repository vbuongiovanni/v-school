import React, {useEffect, useState} from "react";

export default function UnsplashImages(props){

    const {accessKey} = props.authData 
    const [stateData, setStateData] = useState({
        downloads : "",
        views : "",
        likes : ""
    })
    const [inputId, setInputId] = useState("LF8gK8-HGSg")
    const [imageId, setImageId] = useState("LF8gK8-HGSg")


    const auth = { "Authorization" : `Client-ID ${accessKey}` };

    useEffect(() => {
        async function getData() {
            // const response = await fetch(`https://api.unsplash.com/photos/?client_id=${}`)
            const response = await fetch(`https://api.unsplash.com/photos/${imageId}/statistics`, {headers : auth})
            const data = await response.json();
            console.log(data)
            await setStateData(prevData => ({
                ...prevData,
                downloads : data.downloads.total,
                views : data.views.total,
                likes : data.likes.total
            }))
        }
        
        getData()
    }, []) 

    const handleClick = event => {
        event.preventDefault();
        setImageId(inputId)
    }

    const handleChange = event => {
        setInputId(event.target.value)
    }

    console.log(stateData)

    return (
        <>
            <h1>Unsplash</h1>
            <h4>Stats for Image ID : {inputId}</h4>
            <p>Downloads: {stateData.downloads}</p>
            <p>Likes: {stateData.likes}</p>
            <p>Views: {stateData.views}</p>
            <input 
                name="inputId"
                value={inputId}
                onChange={handleChange}
            />
            <button onClick={handleClick}>Show me the stats!</button>
        </>
    )
    
}