import React, {PureComponent, Component} from "react"
import Parent from "./Parent"

class GrandParent extends PureComponent {    

    // implementation of shouldComponentUpdate()
/*
     shouldComponentUpdate(nextProps, nextState) {
        // there should NOT be any deep evaluations in this function, as it will erase gains.
        if (nextProps.count === this.props.count) {
            return false;
        }
        return true; 
    }
 */

    // since we changed this to a PureComponent, we no longer need to worry about working with shouldComponentUpdate()

    render() {
        console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
        return (
            <div>
                <p>I'm a GrandParent Component</p>
                <Parent />
                <Parent />
            </div>
        )
    }
}

export default GrandParent