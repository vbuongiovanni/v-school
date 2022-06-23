import React, {useState, useEffect} from "react";

export default function TwitterCall(props) {

    const {bearerToken} = props.authData;

    // const [data, setData] = useState([])
    const [nextToken, setNextToken] = useState("")
    const [counter, setCounter] = useState(0)
    const [hashTag, setHashTag] = useState("")
    const [tweetObjects, setTweetObjects] = useState([])
    const [imageSize, setImageSize] = useState(500);
    

    let auth = {Authorization : "Bearer " + bearerToken};

    let myHeaders = {
            headers : auth
        };

    // inital
    useEffect(() => {

        const SameOriginWorkaround = "https://cors-anywhere.herokuapp.com/";

        const tweetContent = '"some text here"'
        const userName = "SomeNameHere"
        const authorId = "00000000000"

        // get array of tweets based on search param
        const getData = async () => {

            const paginationParam = (nextToken === "" || nextToken === undefined)  ? "" : `&next_token=${nextToken}`;

            const queryParams = "%20has%3Aimages&tweet.fields=author_id&expansions=attachments.media_keys&media.fields=url"            
            // hashtag
            const userInputEncoded = hashTag
                                        .replaceAll("#", "%23")
                                        .replaceAll(" or ", " OR ")
                                        .replaceAll(" Or ", " OR ")
                                        .replaceAll(" oR ", " OR ")
                                        .replaceAll("from:", "from%3A")
                                        .replaceAll("@", "%40")
                                        .replaceAll(" ", "%20")

            const response = await fetch(SameOriginWorkaround + `https://api.twitter.com/2/tweets/search/recent?max_results=50&query=${userInputEncoded}${queryParams}${paginationParam}`, myHeaders)
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

                            let shouldRetain = (tweetObjects.map(tweet => tweet.imageUrl).indexOf(newTweet.imageUrl) < 0)
                                
                            if (shouldRetain) {
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
    const onInputSizeChange = (e) => {
        setImageSize(e.target.value)
    } 
    const handleSubmit = e => {
        e.preventDefault()
        setCounter(prevValue => prevValue + 1)
    }

    let existingImages = []
    let tweetRenderData = []
    tweetRenderData = [...tweetRenderData, ...tweetObjects]
    if (tweetRenderData.length !== 0){
        tweetRenderData = tweetRenderData.map(tweet => {
            if (existingImages.indexOf(tweet.imageUrl) < 0) {
                        existingImages.push(tweet.imageUrl)
                        return tweet;                
                    }
        })
        tweetRenderData = tweetRenderData.filter(tweet => tweet !== undefined);
        tweetRenderData = tweetRenderData.sort((c1, c2) => (c1.authorId < c2.authorId) ? 1 : (c1.authorId > c2.authorId) ? -1 : 0);
    }    
    
    return (
        <>  
            <form onSubmit={handleSubmit}>
                <input placeholder="hashtag" name={"hashTag"} value={hashTag} onChange={onInputChange}/>
                <br/>
                <input placeholder="500" name={"imageSize"} value={imageSize} onChange={onInputSizeChange}/>
                <br/>
                <button>Show / Load More Results</button>
                <p>total results : {tweetObjects.length}</p>
                <p>total unique urls : {existingImages.length}</p>
            </form>
            <br/>
            {tweetRenderData.map((tweet, index) => {
                    return (
                        <div key={index} >
                            <h4>Author ID: {tweet.authorId}</h4>
                            <p>Image ID: {tweet.imageId}</p>
                            <p>Tweet ID: {tweet.tweetId}</p>
                            <img src={tweet.imageUrl} style={{"width" : `${imageSize}px`, "height" : "auto"}}></img>
                            <span>{tweet.text}</span>
                        </div>
                        )                    
                })}
        </>
    )
}