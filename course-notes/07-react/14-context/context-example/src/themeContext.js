import React, {createContext, useState} from "react"

// when called, this will return a context instance.
// It can be initialized if desired
const ThemeContext = createContext();

// This is how we separate the context logic into single encapsulated component:
    // we will set the state within the ThemeContextProvider component
    // The component will accept props, all the consumers will be passed down as children
    // this component can then be used in place of using <ThemeContext.provider>

export function ThemeContextProvider(props){ 

    // using context, from the standpoint of the provider, when we DO encapsulate  
    // the logic in a separate file:

    const [color, setColor] = useState("light")

    const toggleTheme = () => {
        setColor(prevColor => prevColor === "light" ? "dark" : "light")
    }
    
    return(
        <ThemeContext.Provider value={{color, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )



}

export {ThemeContext};