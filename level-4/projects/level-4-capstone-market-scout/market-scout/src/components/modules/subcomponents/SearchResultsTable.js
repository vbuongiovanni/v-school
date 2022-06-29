import React from "react";

export default function SearchResultsTable(props) {
    const {searchResults, handleSelection, activeCompany} = props;
    
    // ensures there are at least 5 rows
    const requiredBlanks = Math.max(0, 5 - searchResults.length);
    let presentationData = [...searchResults];
    // sort results by Name/Symbol
    presentationData.sort((a, b) => a.ticker <= b.ticker ? 1 : -1)
    presentationData.sort((a, b) => a.title <= b.title ? -1 : 1)
    for (let i = 0; i < requiredBlanks; i++){
        presentationData.push({cik_str : "000000000", ticker : "", title : ""})
    }

    return (
        <table id="search-table">
            <thead id="search-table-head">
                <tr id="search-table-head-row" key="tableHeaderRow">
                    <th className="table-header-name">Company Name</th>
                    <th className="table-header-symbol">Stock Symbol</th>
                </tr>
            </thead>
            <tbody id="search-table-body" key="tableBody">
                {presentationData.map((company, index) => (
                    <tr key={index}
                        id={"table-content-row" + (company.title === "" ? "-blank" : "") + (activeCompany.name === company.title ? "-active" : "")}
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