import React, {useContext} from "react";
import { AppContext } from "../AppContext";
import TweetBadge from "./subcomponents/TweetBadge";
import PreloadModule from "./subcomponents/PreloadModule";

export default function Tweets(){
    
    const {tweets} = useContext(AppContext);

    return (
        <>
            <h2>Company Tweets</h2>
            {tweets.length !== 0 ? 
            <div className="tweets-container module-container">{tweets.map((tweet, index) => <TweetBadge key={index} tweetData={tweet}/>)}</div>
            : <PreloadModule/>}
        </>
    )

}