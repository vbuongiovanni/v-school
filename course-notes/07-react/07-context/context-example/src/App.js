import React, {useState} from "react";
import Button from "./Button";
import Header from "./Header";
import {ThemeContextProvider} from "./themeContext";
import "./style.css";

export default function App (){


    // Since App.js is the common parent, it will be the context provider
    // note that the Header and Button components are wrapped in the ThemeContext
    // as if they are children. Additionally, ThemeContext has '.Provider' appended.
    // value of the context can be set by passing down into the value prop

    // using context, from the standpoint of the provider, when we don't encapsulate  
    // the logic in a separate file:
    /* 
        const [color, setColor] = useState("light")

        const toggleTheme = () => {
            setColor(prevColor => prevColor === "light" ? "dark" : "light")
        }
        return (
            <>
                <ThemeContext.Provider value={{
                    color: color, 
                    toggleTheme: toggleTheme
                }}>
                    <Header/>
                    <Button/>
                </ThemeContext.Provider>
            </>
        );
    */

    // using context, from the standpoint of the provider, when we DO encapsulate  
    // the logic in a separate file:

    return (
        <>
            <ThemeContextProvider>
                <Header />
                <Button />
            </ThemeContextProvider>
        </>
    )

    
}