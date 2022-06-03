import React, {useState, useEffect} from "react";

export default function TwitterCall(props) {

    const {bearerToken, secKey, apiKey} = props.authData;

    const [data, setData] = useState({})
    const [counter, setCounter] = useState(0)

    let auth = {Authorization : "Bearer " + bearerToken};
    let myHeaders = {
            // method: `${HTTP_GET}`,
            headers : auth,
            Origin : "http://localhost:3000/"
        };

    console.log(myHeaders)

    useEffect(() => {

        const getData = async () => {
            const response = await fetch("https://api.twitter.com/2/tweets/search/recent?query=from:twitterdev", myHeaders)
            console.log(response)
            const data = await response.json().catch(err => "error")
            console.log(data)
        }
        
        getData()

    }, [counter])

    return <h1>Hello from twitterCall!</h1>
}