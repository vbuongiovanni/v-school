import React, {useContext} from "react";
import {AppContext} from "../AppContext";

export default function Financials() {

    const {company, companyFinancials} = useContext(AppContext);

    let renderContent;

    if (companyFinancials !== undefined) {

        let tableHeader;
        let tableContent;

        tableHeader = companyFinancials[0].amounts.map(amount => {
            return (
                <td>{amount.filingPeriod}</td>
            )
        })
        tableHeader.unshift(<td>&nbsp;</td>)

        tableContent = companyFinancials.map(lineItem => {
            return (
                <tr>
                    <td>{lineItem.label}</td>
                    {lineItem.amounts.map(amount => <td>{amount.value}</td>)}
                </tr>
            )
        })

        renderContent = () => {
            return (
                <>            
                    <h1>Financials of {company.name}</h1>
                    <table>
                        <thead>
                            <tr>
                                {tableHeader}
                            </tr>
                        </thead>
                        <tbody>
                            {tableContent}
                        </tbody>
                    </table>
                </>
            )
        }

    } else {
        renderContent = () => {
            return (
                <h1>Loading...</h1>
            )
        }
    }

    return (
        renderContent()
    )
}