import React from "react";
import "./style.css";
import NavBar from "./components/NavBar";
import UglyList from "./components/UglyList";
import {UglyContextProvider} from "./components/UglyContext";

export default function App() {

    return (
        <main>
            <UglyContextProvider>
                <NavBar/>
                <UglyList/>
            </UglyContextProvider>            
        </main>       
    )
}