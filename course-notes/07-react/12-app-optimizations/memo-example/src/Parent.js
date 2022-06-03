import React from "react"
import Child from "./Child"

function Parent(props){
    console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered")
    return (
        <div>
            <p>I'm a Parent Component</p>
            <Child />
            <Child />
        </div>
    )
}
export default React.memo(Parent);