import React from "react";

export default function Joke({setup : setup = "", punchLine}){

    return (
        <div className="joke">
            <div>{setup}</div>
            <div>{punchLine}</div>
        </div>
    )
}
