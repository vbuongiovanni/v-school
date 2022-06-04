
import React, {useState, createContext } from "react";

const ThemeContext = createContext();

export function ThemeContextProvider(props) {

    const [theme, setTheme] = useState("light")

    const handleModeChange = (e) => {
        setTheme(e.target.value)
    }

    return(
        <ThemeContext.Provider value={{theme, handleModeChange}}>
            {props.children}
        </ ThemeContext.Provider>
    )
}

export {ThemeContext};