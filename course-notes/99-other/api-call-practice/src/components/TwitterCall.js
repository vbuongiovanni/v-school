import React, {useState, useEffect} from "react";

export default function TwitterCall(props) {

    const {bearerToken} = props.authData;

    // const [data, setData] = useState([])
    const [nextToken, setNextToken] = useState("")
    const [counter, setCounter] = useState(0)
    const [hashTag, setHashTag] = useState("")
    const [tweetObjects, setTweetObjects] = useState([])

    let auth = {Authorization : "Bearer " + bearerToken};

    let myHeaders = {
            headers : auth
        };

    // inital
    useEffect(() => {

        const SameOriginWorkaround = "https://cors-anywhere.herokuapp.com/";

        const cashTag = "stockTickerHere"
        const userName = "userNameHere"
        const author_id = "00000000"

        // get array of tweets based on search param
        const getData = async () => {

            const paginationParam = (nextToken === "" || nextToken === undefined)  ? "" : `&next_token=${nextToken}`;

            const queryParams = "%20has%3Aimages&tweet.fields=author_id&expansions=attachments.media_keys&media.fields=url"

            const response = await fetch(SameOriginWorkaround + `https://api.twitter.com/2/tweets/search/recent?max_results=50&query=%23${hashTag}${queryParams}${paginationParam}`, myHeaders)
            // const response = await fetch(SameOriginWorkaround + `https://api.twitter.com/2/tweets/search/recent?max_results=50&query=%23${cashTag}${queryParams}${paginationParam}`, myHeaders)
            // const response = await fetch(SameOriginWorkaround + `https://api.twitter.com/2/tweets/search/recent?max_results=50&query=%24${stockTicker}${queryParams}${paginationParam}`, myHeaders)
            // author of tweet
            // const response = await fetch(SameOriginWorkaround + `https://api.twitter.com/2/tweets/search/recent?max_results=50&query=from%3A${userName === "" ? author_id : userName}${queryParams}${paginationParam}`, myHeaders)
            // const response = await fetch(SameOriginWorkaround + `https://api.twitter.com/2/tweets/search/recent?max_results=50&query=from%3A${author_id}${queryParams}${paginationParam}`, myHeaders)
            // name associated w/ tweet
            // const response = await fetch(SameOriginWorkaround + `https://api.twitter.com/2/tweets/search/recent?max_results=10&query=%40${userName}${queryParams}${paginationParam}`, myHeaders)

            const responseData = await response.json().catch(err => "error")
            
            if (Object.keys(responseData).find(key => key === "data")) { 
                if (Object.keys(responseData).find(key => key === "includes")) { 
                    let {media} = responseData.includes
                    let {data} = responseData
                    data = data.filter(tweet => Object.keys(tweet).find(key => key === "attachments"))
                    data.map(tweet => {
                        tweet.attachments.media_keys.map(individualMediaKey => {
                            let [returnedImageUrl] = media.filter(mediaItem => mediaItem.media_key === individualMediaKey)
                            const newTweet = {
                                    tweetId : tweet.id,
                                    imageId : individualMediaKey,
                                    authorId : tweet.author_id,
                                    imageUrl : returnedImageUrl.url,
                                    text : tweet.text
                                }
                            if (tweetObjects.imageUrl !== newTweet.imageUrl) {
                                setTweetObjects(prevTweetObjects => [...prevTweetObjects, newTweet])
                            }
                            })
                        })
                    }

            } else {
                console.log("no matches")
            }
            if (Object.keys(responseData).find(key => key === "meta")) { 
                await setNextToken(responseData.meta.next_token)
            }
            
        }

        // create request object

        if (hashTag !== "") {
            getData() 
        } 
        
        
    }, [counter]) 

    const onInputChange = (e) => {
        setHashTag(e.target.value)
    } 

    let tweetRenderData = [...tweetObjects];
    tweetRenderData = tweetRenderData.sort((c1, c2) => (c1.authorId < c2.authorId) ? 1 : (c1.authorId > c2.authorId) ? -1 : 0);
    tweetRenderData = tweetRenderData.sort((c1, c2) => (c1.tweet < c2.tweet) ? 1 : (c1.tweet > c2.tweet) ? -1 : 0);

    return (
        <>  
            <input placeholder="hashtag" name={"hashTag"} value={hashTag} onChange={onInputChange}/>
            <button onClick={() => setCounter(prevValue => prevValue + 1)}>Show / Load More Results</button>
            <p>total results : {tweetObjects.length}</p>
            <br/>
            {tweetRenderData.map((tweet, index) => {
                return (
                    <div key={index} >
                        <h4>Author ID: {tweet.authorId}</h4>
                        <p>Image ID: {tweet.imageId}</p>
                        <p>Tweet ID: {tweet.tweetId}</p>
                        <img src={tweet.imageUrl} style={{"width" : "200px", "height" : "auto"}}></img>
                        <span>{tweet.text}</span>
                    </div>
                    )
                })}
        </>
    )
}