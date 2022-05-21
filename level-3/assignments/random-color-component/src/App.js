import react, {useState, useEffect} from "react"
import "./style.css"
import RandomColor from "./components/RandomColor"

export default function App(){


    return (
        <>
            <form>
                <RandomColor />
            </form>
        </>
    )
}
