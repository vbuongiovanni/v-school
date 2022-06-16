import React, {useState} from "react";
import ReactDOM from "react-dom";
import data from "./pages/res/company_tickers"

export default function Navbar(){
    
    const COMPANY_TICKERS = Object.values(data.COMPANY_TICKERS)
    
    const [companyInputs, setCompanyInputs] = useState({
        companyName : "",
        companySymbol : ""
    })
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = e => {
        e.preventDefault();
        console.log("Search!");
        const {companyName, companySymbol} = companyInputs;
        setSearchResults(COMPANY_TICKERS.filter(company => company.title.toLowerCase().includes(companyName.toLowerCase()) || (company.ticker === companySymbol)))
    }

    const handleChange = e => {
        setCompanyInputs(prevInputs => ({...prevInputs, [e.target.name] : e.target.value}))
    }

    // convert searchResults to html table
    const getResultsTable = (filteredCompanies) => {
        return (
            <table>
                <thead>
                    <tr key="tableHeaderRow">
                        <th className="table-header-name">Company Name</th>
                        <th className="table-header-symbol">Stock Symbol</th>
                    </tr>
                </thead>
                <tbody key="tableBody">
                    {filteredCompanies.map((company, index) => (
                        <tr key={company.cik} className="table-content-row">
                            <th className="table-content-name">{company.title}</th>
                            <th className="table-content-symbol">{company.ticker}</th>
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
                    <label htmlFor="name">Stock Name</label>
                    <input
                        name="companyName"
                        value={companyInputs.companyName}
                        onChange={handleChange}
                        placeholder="Company Name"
                    />
                </div>
                <div>
                    <label htmlFor="ticker">Stock Symbol</label>
                    <input
                        name="companySymbol"
                        value={companyInputs.companySymbol}
                        onChange={handleChange}
                        placeholder="Stock Symbol"
                    />
                </div>
                <div className="navbar--button-container">
                    <button>Search</button>
                </div>
            </form>
            <div className="navbar--search-results">
                {searchResults.length < 1 ? 
                    <h4>Search for the company of interest!</h4> :
                     getResultsTable(searchResults)
                }
            </div>
        </nav>
    )
}