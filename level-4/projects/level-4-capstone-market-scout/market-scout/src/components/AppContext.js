import React, {createContext, useState} from "react";
export const AppContext = createContext();

export const AppContextProvider = (props) => {

    // Company of interest
    const [company, setCompany] = useState({
        cik : undefined,
        stockSymbol : "",
        name : ""
    })

    // SEC state
        // Company Details
        const [companyDetails, setCompanyDetails] = useState(undefined)
        // Company Financials
        const [companyFinancials, setCompanyFinancials] = useState(undefined)
    // alpha-vantage State (for prices)
        const [pricesData, setPricesData] = useState(undefined)
    // Tweets (for prices)
        const [tweets, setTweets] = useState([])


    // API request function - sends request to proxy server, which relays applicable request to
    // the appropriate endpoint, then sets the returned data state using the state's setter function
    const getData = async (source, type) => {

        if(company.cik !== undefined) {
            const options = {headers :  
                {
                    Accept : "application/json",
                    "Upgrade-Insecure-Requests" : "1"
            }}

            let proxyServerEndpoint

            if (source === "sec") {
                proxyServerEndpoint = `/${source}?type=${type}&cik=${company.cik}`;
            } else if (source === "prices") {
                proxyServerEndpoint = `/${source}?stockSymbol=${company.stockSymbol}`;
            } else if (source === "tweets") {
                proxyServerEndpoint = `/${source}?stockSymbol=${company.stockSymbol}`;
            }
            
            const response = await fetch(proxyServerEndpoint, options)
                .catch(error => console.log(error))
            const data = await response.json()
                .catch(error => console.log(error))
            // console.log(`${source} API was hit`)

            if (source === "sec" && type === "details") {
                setCompanyDetails(data)
            } else if (source === "sec" && type === "financials") {
                setCompanyFinancials(data)
            } else if (source === "prices") {
                setPricesData(data)
            } else if (source === "tweets") {
                setTweets(data)
            }
        }
    }

    return (
        <AppContext.Provider
            value={{
                company, setCompany, 
                getData, 
                companyDetails, companyFinancials, pricesData, tweets,
                setCompanyFinancials
            }}
        >
            {props.children}
        </AppContext.Provider>
    )

}