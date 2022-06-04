import React, {useContext} from "react";
import {ThemeContext} from "./themeContext"

export default function App() {

    const {theme, handleModeChange} = useContext(ThemeContext);

    return (
        <div className={`${theme}`}>
            <nav className={`${theme}`}>
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
            </nav>
            <main className={`${theme}`}>
                <h1>Click on the dropdown menu to change the theme</h1>
                <select
                    name="theme"
                    value={theme}
                    onChange={handleModeChange}
                    className={`${theme} drop-down-menu`}
                    >
                    <option value={"light"}>Light Mode</option>
                    <option value={"dark"}>Dark Mode</option>
                    <option value={"circus"}>Circus Mode</option>
                    <option value={"inverted light"}>Inverted Light Mode</option>
                    <option value={"inverted dark"}>Inverted Dark Mode</option>
                    <option value={"inverted circus"}>Inverted Circus Mode</option>
                </select>
            </main>
            <footer className={`${theme}`}>
                An amazing footer full of meaningful information
            </footer>
        </div>
    )
}