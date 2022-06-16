import React, {createContext, useState} from "react"

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const [company, setCompany] = useState({
        "cik_str":320193,
        "ticker":"AAPL",
        "title":"Apple Inc."
    })

    return (
        <AppContext.Provider value={company}>
            {props.children}
        </AppContext.Provider>
    )

}