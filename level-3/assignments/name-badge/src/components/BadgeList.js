import React from "react";
import Badge from "./Badge"

export default function BadgeList(props){

    // deconstruct badgeList state from props
    const {badgeList} = props

    // map over badgeList, rendering all badges using Badge Component
    return(
        <ul>
            {badgeList.map((element) => <Badge {...element}/>)}
        </ul>
    )
}