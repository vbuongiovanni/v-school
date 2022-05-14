import React from "react";
import Friend from "./Friend";
import data from "./data"

export default function FriendList(){
    const friendList = data.map(friend => {
        return(
            <Friend key={friend.id} {...friend}/>
        )
    })

    return (
        <ul className="friend-list">
            {friendList}
        </ul>
    )
}