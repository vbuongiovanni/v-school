import React, {useState, useContext, useEffect} from "react";
import data from "./res/company_tickers"
import {AppContext} from "./AppContext";
import SearchResultsTable from "./modules/subcomponents/SearchResultsTable";

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
        setSearchResults(COMPANY_TICKERS.filter(company => company.title.toLowerCase().includes(inputName.toLowerCase()) || (company.ticker.toLowerCase() === inputSymbol.toLowerCase())))
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
                <h3 className="search-header search-form-header">Company Search</h3>
                <div className="search-form-input-row">
                    <label htmlFor="inputName">Stock Name</label>
                    <input
                        name="inputName"
                        value={companyInputs.inputName}
                        onChange={handleInputChange}
                        placeholder="Company Name"
                    />
                </div>
                <div className="search-form-input-row">
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
                <div className="search-results-container">
                    <h3 className="search-header search-table-header">Search Results</h3>
                    <div className="table-container">
                        {<SearchResultsTable searchResults={searchResults} activeCompany={company} handleSelection={handleSelection}/>}
                    </div>
                </div>
            </div>
        </nav>
    )
}