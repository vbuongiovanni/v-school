import React from "react"

// how to implement React.memo() when exporting default inline
export default React.memo(function GrandChild(props) {
    console.log("[ ]   [ ]   [ ]   [👶🏻] rendered")
    return (
        <div>
            <p>I'm a GrandChild Component</p>
        </div>
    )
})