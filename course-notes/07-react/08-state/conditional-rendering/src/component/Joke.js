import React from "react";

export default function Joke({setup : setup = "", punchLine, isOffensive, upVotes}){

    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    const [isShown, setIsShown] = React.useState(false)

    const toggle = () => {
        setIsShown(prevShown => !prevShown)
    }

    /**
     * Challenge:
     * - Only display the punchline paragraph if `isShown` is true
     */
    return (
        <div className="joke">
            {setup && <div className="setup">Setup: {setup}</div>}
            {isShown && <div>{punchLine}</div>}
            <button onClick={toggle}>{!isShown ? "Show Punchline!" : "Hide Punchline"}</button>
            <div className="stats">Explicit: {isOffensive + ""}</div>
            <div className="stats">Total Up votes: {upVotes}</div>
        </div>
    )
}
