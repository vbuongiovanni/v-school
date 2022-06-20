import React, {useState, useContext, useEffect} from "react";
import data from "./pages/res/company_tickers"
import {AppContext} from "./AppContext";

export default function Navbar(){

    // deconstruct context:
    const {company, setCompany, getData} = useContext(AppContext);

    // useEffect to manage API calls
    useEffect(() => {
        getData("sec", "details")
        getData("sec", "financials")
        getData("prices", "")
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

    // convert searchResults to html table
    const getResultsTable = (filteredCompanies) => {
        
        // ensures there are at least 5 rows
        const requiredBlanks = Math.max(0, 5 - filteredCompanies.length);
        let presentationData = [...filteredCompanies];
        // sort results by Name/Symbol
        presentationData.sort((a, b) => a.ticker <= b.ticker ? 1 : -1)
        presentationData.sort((a, b) => a.title <= b.title ? -1 : 1)
        for (let i = 0; i < requiredBlanks; i++){
            presentationData.push({cik_str : "000000000", ticker : "", title : ""})
        }

        return (
            <table>
                <thead>
                    <tr key="tableHeaderRow">
                        <th className="table-header-name">Company Name</th>
                        <th className="table-header-symbol">Stock Symbol</th>
                    </tr>
                </thead>
                <tbody key="tableBody">
                    {presentationData.map((company, index) => (
                        <tr key={index}
                            id={company.cik_str}
                            className={"table-content-row" + (company.title === "" ? "-blank" : "")}
                            onClick={company.title === "" ? () => {} : handleSelection}
                        >
                            <th id={company.cik_str} className="table-content-name">{company.title}</th>
                            <th id={company.cik_str} className="table-content-symbol">{company.ticker}</th>
                        </tr>)
                    )}
                </tbody>
            </table>
        )
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
                {getResultsTable(searchResults)}
            </div>
        </nav>
    )
}