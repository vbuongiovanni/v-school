import React, {useContext} from "react";
import { AppContext } from "../AppContext";
import TweetBadge from "./subcomponents/TweetBadge";

export default function Tweets(){
    
    const {company, tweets} = useContext(AppContext);

    return (
        <>
            <h1>Tweets for {company.name}</h1>
            <div className="tweets-container module-container">
                {tweets.map((tweet, index) => <TweetBadge key={index} tweetData={tweet}/>)}
            </div>
        </>
    )

}