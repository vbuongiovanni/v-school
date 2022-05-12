import React from "react";

export default function Header() {
    return (
        <header>
            <nav className="nav-container">
                <img className="nav-logo" src={require("./react-logo.png")} alt="react logo"></img>
                <ul className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

// export default Header;