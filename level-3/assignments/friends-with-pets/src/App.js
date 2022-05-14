import React from "react";
import "./style.css"
import FriendList from "./components/FriendList"

export default function App(){
    return(
        <>
            <header className="header-container">
                <h1 className="header-container--title">My Friends and Their Pets!</h1>
            </header>
            <main className="main-container">
                <FriendList/>
            </main>
            <footer className="footer-container">
            </footer>
        </>
    )
}