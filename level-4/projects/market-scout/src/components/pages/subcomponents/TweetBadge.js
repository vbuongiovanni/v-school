import React from "react";

export default function TweetBadge(props) {
    const {text, created_at, name, profile_image_url, url, username, verified} = props.tweetData

    const convertTime = (created_at) => {
        // convert to Date Object
        const createDate = new Date(created_at);
        const month = (createDate).toLocaleString('default', { month: 'short' });
        // get current time
        const currentTime = new Date().getTime();
        // get time of creation
        const tweetTime = createDate.getTime();
        // get difference between times
        const minutes = ((currentTime - tweetTime)/1000) / 60;
        const hours = Math.floor(minutes / 60)
        const time = hours < 1 ? Math.floor(minutes) + "M" : hours + "H"
        // return time code or date if time is 24 hours or greater
        return hours < 24 ? time : `${month} ${createDate.getDate()}`;
    }
    const verifiedIconPath = "M 22.5 12.5 c 0 -1.58 -0.875 -2.95 -2.148 -3.6 c 0.154 -0.435 0.238 -0.905 0.238 -1.4 c 0 -2.21 -1.71 -3.998 -3.818 -3.998 c -0.47 0 -0.92 0.084 -1.336 0.25 C 14.818 2.415 13.51 1.5 12 1.5 s -2.816 0.917 -3.437 2.25 c -0.415 -0.165 -0.866 -0.25 -1.336 -0.25 c -2.11 0 -3.818 1.79 -3.818 4 c 0 0.494 0.083 0.964 0.237 1.4 c -1.272 0.65 -2.147 2.018 -2.147 3.6 c 0 1.495 0.782 2.798 1.942 3.486 c -0.02 0.17 -0.032 0.34 -0.032 0.514 c 0 2.21 1.708 4 3.818 4 c 0.47 0 0.92 -0.086 1.335 -0.25 c 0.62 1.334 1.926 2.25 3.437 2.25 c 1.512 0 2.818 -0.916 3.437 -2.25 c 0.415 0.163 0.865 0.248 1.336 0.248 c 2.11 0 3.818 -1.79 3.818 -4 c 0 -0.174 -0.012 -0.344 -0.033 -0.513 c 1.158 -0.687 1.943 -1.99 1.943 -3.484 Z m -6.616 -3.334 l -4.334 6.5 c -0.145 0.217 -0.382 0.334 -0.625 0.334 c -0.143 0 -0.288 -0.04 -0.416 -0.126 l -0.115 -0.094 l -2.415 -2.415 c -0.293 -0.293 -0.293 -0.768 0 -1.06 s 0.768 -0.294 1.06 0 l 1.77 1.767 l 3.825 -5.74 c 0.23 -0.345 0.696 -0.436 1.04 -0.207 c 0.346 0.23 0.44 0.696 0.21 1.04 Z"
    return (
        <div className={"tweet-badge-container"} key={props.key}>
            <div>
                <img src={profile_image_url} className={"tweet-badge-profile-picture"}></img>
            </div>
            <div className={"tweet-badge-content"}>
                <div className={"tweet-badge-info"}>
                    <span className={"tweet-badge-alias-name"}><a href={`https://twitter.com/${username}`}>{name}</a></span>
                    <span className={"tweet-badge-user-name"}>@{username}</span>
                    <span className={"tweet-badge-time-date"}> · {convertTime(created_at)}</span>
                    {verified && 
                        <svg className={"tweet-badge-verification-icon"}>
                            <path d={verifiedIconPath}></path>
                        </svg>
                    }
                </div>
                <p className={"tweet-badge-text"}>{text.replaceAll("&lt;", "<").replaceAll("&gt;", ">")}</p>
            </div>
        </div>
    )
}