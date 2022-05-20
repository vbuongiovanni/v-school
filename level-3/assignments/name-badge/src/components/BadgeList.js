import React from "react";
import Badge from "./Badge"

export default function BadgeList(props){

    const {badgeList} = props

    return(
        <ul>
            {badgeList.map((element) => <Badge {...element}/>)}
        </ul>
    )
}