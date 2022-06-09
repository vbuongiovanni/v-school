import React from "react"
import Parent from "./Parent"

function GrandParent(props) {    
    console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
    return (
        <div>
            <p>I'm a GrandParent Component</p>
            <Parent />
            <Parent />
        </div>
    )
}

// implementation of React.Memo() - 
    // first argument is the main Component
    // second argument is an array of AreEqual callback functions

// implementation of manual areEqual(prevProps, nextProps):

function areEqual(prevProps, nextProps) { // if this returns false, then component will rerender. Otherwise, it wont be rendered
    return prevProps.count === nextProps.count;
  }

// This along is essentially the same as using React.PureComponent:
export default React.memo(GrandParent, [areEqual]);

// Explanation - since we are passing props down into one of the GrandParent components in App.js, one will be continuously rerender every time the
// the prop changes (e.g., the counter)

// However, since we implemented React.Memo() on the sub components, and the sub-components aren't being passed any props, they will not be rerendered.

