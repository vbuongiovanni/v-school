import React from 'react'
require("../style.css")

export default function Main(){
    return (
        <main className="main--container">
            <div className="about">
                <h1 className="main--header">About</h1>
                <p className="main--text">I am a aspiring web developer. I think the Rolling Stones are substantially better than the Beatles, but Pink Floyd is still better than both</p>    
            </div>
            <div className="interests">
                <h1 className="main--header">Interests</h1>
                <p className="main--text">Long walks on the beach and bubble baths.</p>
            </div>            
        </main>
    )
}