import {useState} from "react"

function useCounter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    // alternatively, this could be returned as an array... but returning an object provides rigidity into the naming.
    return {count, increment}
}
export default useCounter;