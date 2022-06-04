import React, {useContext} from "react";
import {ThemeContext} from "./themeContext";

export default function Button() {

    // to access the value of the context, import the themeContext
    // then call the 'useContext' method from the react library:
    const {color, toggleTheme} = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className={`${color}-theme`}>Change Theme</button>
    )
}