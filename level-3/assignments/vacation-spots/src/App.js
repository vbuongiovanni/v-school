import React from "react"
import Card from "./components/Card"
import data from "./components/data"
import "./style.css";

export default function App() {
    const cards = data.map(card => 
        <Card 
            key={card.place}
            {...card}
        />
        
    ) 
    return (
        <div>
            <h1 className="page-title">Vacation Spots!</h1>
            <div className="location-list">
                {cards}
            </div>
        </div>
    )
}
