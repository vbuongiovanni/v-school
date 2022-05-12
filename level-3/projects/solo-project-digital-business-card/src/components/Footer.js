import React from 'react'
require("../style.css")

export default function Footer(){
    return (
        <footer className="footer--container">
            <img src={require("../resources/tw-icon.png")} alt="twitter icon"></img>
            <img src={require("../resources/fb-icon.png")} alt="facebook icon"></img>
            <img src={require("../resources/ig-icon.png")} alt="instagram icon"></img>
            <img src={require("../resources/gh-icon.png")} alt="github icon"></img>
        </footer>
    )
}