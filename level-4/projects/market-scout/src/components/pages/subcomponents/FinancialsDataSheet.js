import ReactDataSheet from 'react-datasheet';
import React, { useContext } from "react"; 
import { AppContext } from '../../AppContext';

export default function DataSheet(props) {

    const {companyFinancials, setCompanyFinancials} = useContext(AppContext);
    
    return (
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
    )
  }