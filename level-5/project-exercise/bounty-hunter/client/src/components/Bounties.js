import React from "react";
import Bounty from "./Bounty";

export default (props) => {
    const {bounties} = props;

    return (
        <>
            {bounties.map((bounty, index) => <Bounty key={index} {...bounty}/>)}
        </>
    )

}