import React, {useEffect, useState} from "react";

export default function StarWars(){

    const [stateData, setStateData] = useState([])
    const [count, setCount] = useState(1)

    useEffect(() => {
        async function getData() {
            const response = await fetch(`https://swapi.dev/api/people/${count}`)
            const data = await response.json();
            const {name, height, mass} = data;
            setStateData(prevData => [...prevData, {
                name,
                height,
                mass,
            }])
        }
        getData()
        if (count < 10) {
            setCount(prevCount => prevCount + 1)
        }
    }, [count]) 


    const handleClick = event => {
        event.preventDefault();
        setCount(prevCount => prevCount + 1)
        console.log(count)
    }

    return (
        <>
            <h1>Star Wars API</h1>
            {stateData.map((element, id) => <div key={id}><p>Name: {element.name}</p> <p>Height: {element.height}</p> <p>Weight: {element.mass}</p></div>)}
            <button onClick={handleClick}>Get Another Starwars character</button>
        </>
    )
    
}