import React from "react"
import data from "./components/data";
import Destination from "./components/Destination";
import Header from "./components/Header"

export default function App(){

  const destinations = data.map(destination => {
    
    return (
      <Destination
        key={destination.id}
        {...destination}
      />
    )
    
  })

  return (
    <main className="container-main">
      <Header />
      <div className="destination--list">
        {destinations}
      </div>
    </main>
  )
}