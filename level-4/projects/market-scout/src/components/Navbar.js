import React, {useState, useContext, useEffect} from "react";
import data from "./pages/res/company_tickers"
import {AppContext} from "./AppContext";
import SearchResultsTable from "./pages/subcomponents/SearchResultsTable";

export default function Navbar(){

    // deconstruct context:
    const {company, setCompany, getData} = useContext(AppContext);

    // useEffect to manage API calls
    useEffect(() => {
        getData("sec", "details")
        getData("sec", "financials")
        getData("prices", "")
        getData("tweets", "")
    }, [company])

    // get array of Company Details
    const COMPANY_TICKERS = Object.values(data.COMPANY_TICKERS)
    
    // set state for user input fields
    const [companyInputs, setCompanyInputs] = useState({
        inputName : "",
        inputSymbol : ""
    })
    
    // set state for search results:
    const [searchResults, setSearchResults] = useState([])

    // handle search of name/symbol
    const handleSearch = e => {
        e.preventDefault();
        let {inputName, inputSymbol} = companyInputs;
        inputName = inputName === "" ? "QQQQQZZZZZQQQQ" : inputName;
        setSearchResults(COMPANY_TICKERS.filter(company => company.title.toLowerCase().includes(inputName.toLowerCase()) || (company.ticker === inputSymbol)))
    }

    // handles 'Stock Name' and 'Stock Symbol' inputs 
    const handleInputChange = e => {
        setCompanyInputs(prevInputs => ({...prevInputs, [e.target.name] : e.target.value}));
    }

    // handles selection of Company from table
    const handleSelection = e => {
        const selectedCompanyCIK = e.target.id;
        const [selectedCompany] = COMPANY_TICKERS.filter(company => company.cik_str + "" === selectedCompanyCIK)
        setCompanyInputs({
            inputName : selectedCompany.title,
            inputSymbol : selectedCompany.ticker
        })
        setCompany({
            cik : selectedCompany.cik_str,
            stockSymbol : selectedCompany.ticker,
            name : selectedCompany.title
        })
    }
    
    return (
        <nav>
            <form onSubmit={handleSearch}>
                <div>
                    <label htmlFor="inputName">Stock Name</label>
                    <input
                        name="inputName"
                        value={companyInputs.inputName}
                        onChange={handleInputChange}
                        placeholder="Company Name"
                    />
                </div>
                <div>
                    <label htmlFor="inputSymbol">Stock Symbol</label>
                    <input
                        name="inputSymbol"
                        value={companyInputs.inputSymbol}
                        onChange={handleInputChange}
                        placeholder="Stock Symbol"
                    />
                </div>
                <div className="navbar--button-container">
                    <button>Search</button>
                </div>
            </form>
            <div className="navbar--search-results">
                {<SearchResultsTable searchResults={searchResults} handleSelection={handleSelection}/>}
            </div>
        </nav>
    )
}