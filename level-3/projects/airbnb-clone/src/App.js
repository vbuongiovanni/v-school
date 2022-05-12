import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./components/data"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/
 
export default function App() {

    const cards = data.map(item => {
        // note that you can also just pass an entire object... Exception if there is a list:
            // we must explicitly pass a 'key' prop.
        return (
            
            <Card
                key={item.id}
                item={item}
            />
        )
    })
    
    

    return (
        <div className="container">
            <Navbar />
            <Hero />
            <div className="cards">
                {cards}
            </div>
        </div>
    )
}