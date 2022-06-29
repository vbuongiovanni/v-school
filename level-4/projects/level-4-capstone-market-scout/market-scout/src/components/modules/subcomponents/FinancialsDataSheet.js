import ReactDataSheet from 'react-datasheet';
import React from "react"; 

export default function DataSheet(props) {

    const {companyFinancials, setCompanyFinancials} = props;
    
    return (
        <div className="financials-container module-container">
            <ReactDataSheet
                data={companyFinancials}
                valueRenderer={cell => cell.value}
                onCellsChanged={changes => {
                    const grid = companyFinancials.map(row => [...row]);
                    changes.forEach(({ cell, row, col, value }) => {
                        grid[row][col] = { ...grid[row][col], value };
                    });
                    setCompanyFinancials(companyFinancials)
                }}
            /> 
        </div>
    )
  }