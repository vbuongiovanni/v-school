import React, {Component} from "react"
import useCounter from "./useCounter"
/**
 * Pop Quiz!
 * 
 * Refactor the class component below to use hooks instead
 */

 /* 
 class App extends Component {   
    state = {
        count: 0
    }
    
    increment = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }
    
    render() {
        return (
            <div>
                <h1>The count is {this.state.count}</h1>
                <button onClick={this.increment}>Add 1</button>
            </div>
        )
    }
} */

    
function App() {   

    // standard way, without custom hook:
    /*  
    const [count, setCount] = React.useState(0)

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    */
   
    // implementation of custom hook:
        // basically, just move the above code into a separate file that will store a function named
        // use<SomeDescriptionOfState> and return 1.) the state variable and 2.) the applicable function
        // finally, run function and deconstruct the returned values.

        // note that each time useCounter() is called, a new instance is created

    const {count, increment} = useCounter()

    return (
        <div>
            <h1>The count is {count}</h1>
            <button onClick={increment}>Add 1</button>
        </div>
    )
}

export default App