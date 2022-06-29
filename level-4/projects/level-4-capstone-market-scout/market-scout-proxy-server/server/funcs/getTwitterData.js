const axios = require("axios");

const getTwitterData = async (stockSymbol, twitterKey, res) => {
    const myHeaders = {
        headers : {Authorization : "Bearer " + twitterKey}
        };
    const queryParams = "&expansions=author_id&tweet.fields=created_at&user.fields=profile_image_url,url,verified"
    let response = await axios.request(`https://api.twitter.com/2/tweets/search/recent?max_results=50&query="$${stockSymbol}"${queryParams}`, myHeaders)
    let responseData = await response.data
    let nextToken = responseData.meta.next_token;
    let textResponses = [...responseData.data];
    let userData = [...responseData.includes.users];
    response = await axios.request(`https://api.twitter.com/2/tweets/search/recent?max_results=50&query="$${stockSymbol}"${queryParams}&next_token=${nextToken}`, myHeaders)
    responseData = await response.data
    textResponses = [...textResponses, ...responseData.data]
    userData = [...userData, ...responseData.includes.users]

    // remove duplicates from userData
    let existingUserIds = []
    userData = userData.map(tweet => {
                    if (existingUserIds.indexOf(tweet.id) === -1){
                        existingUserIds.push(tweet.id)
                        return tweet;
                }})
                .filter(tweet => tweet != undefined)

    // remove duplicates from textResponses
    let existingTweetIds = []
    textResponses = textResponses.map(tweet => {
                        if (existingTweetIds.indexOf(tweet.id) === -1){
                            // push ID of tweet
                            existingTweetIds.push(tweet.id)
                            // clean up text
                            let tweetText = tweet.text.replaceAll("&amp;", "&")
                            tweet.text = tweetText
                                        .split(" ")
                                        .map(word => word[0] === "$" ? word.toUpperCase() : word)
                                        .join(" ")
                            // get matched userData
                            const [tweetUser] = userData.filter(user => user.id === tweet.author_id);
                            const {verified, name, username, profile_image_url, url} = tweetUser;
                            // return consolidated object
                            return {...tweet, verified, name, username, profile_image_url, url};
                    }})
                    .filter(tweet => (tweet !== undefined) && (tweet.text.includes(`$${stockSymbol.toUpperCase()}`)))

    res.json(textResponses)
}

module.exports = getTwitterData;