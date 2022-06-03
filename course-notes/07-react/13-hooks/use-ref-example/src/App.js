import React, {useState, useRef} from "react"

function App() {
    const [newTodoValue, setNewTodoValue] = useState("")
    const [todosList, setTodosList] = useState([])
    
    // Objective - shift focus back to input box if the 'Add todo item' button is clicked.
        // this this can be accomplished using the useRef hook.
    const inputRef = useRef(null); // it's common to initialize this w/ null. 
    // After rendering, inputRef will have '.current' property and will be tied to the <input /> element (since we added ref={inputRef})
    
    
    function handleChange(event) {
        setNewTodoValue(event.target.value)
    }

    
    function addTodo(event) {
        event.preventDefault()
        setTodosList(prevTodosList => [...prevTodosList, newTodoValue])
        setNewTodoValue("")
        // now we can access the current property within the 'inputRef' hook.
        console.log(inputRef)
        // we can shift focus by running the current.focus() method:
        inputRef.current.focus();
    }
    
    const allTodos = todosList.map(todo => <p key={todo}>{todo}</p>)
    
    return (
        <div>
            <form>
                <input ref={inputRef} type="text" name="todo" value={newTodoValue} onChange={handleChange}/>
                <button onClick={addTodo}>Add todo item</button>
            </form>
            {allTodos}
        </div>
    )
}

export default App