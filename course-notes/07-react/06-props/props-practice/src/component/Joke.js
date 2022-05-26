import React from "react";

export default function Joke({setup : setup = "", punchLine, isOffensive, upVotes}){


    // conditional rendering: see line 9 - if setup is truthy, then it will rendered.. otherwise it wont:
    return (
        <div className="joke">
            {setup && <div className="setup">Setup: {setup}</div>}
            <div>{punchLine}</div>
            <div className="stats">Explicit: {isOffensive + ""}</div>
            <div className="stats">Total Up votes: {upVotes}</div>
        </div>
    )
}
