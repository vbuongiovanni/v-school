import {React, useContext, useEffect} from "react";
import {AppContext} from "../AppContext";

export default function Overview() {
    
    const {companyDetails} = useContext(AppContext);

    let renderContent;
    
    if (companyDetails !== undefined) {
        // deconstruct response
        const [
            name, cik, phone, ein, stateOfIncorporation, entityType, sicDescription,
            exchanges, tickers, formerNames,
            addresses
        ]  = companyDetails;
        // formulate data into component
        renderContent = () => {
            return (
                <div>
                    <h1>Overview of {name}</h1>
                    <p>Central Index Key (CIK): {cik}</p>
                    <p>Entity Identification Number (EIN): {ein}</p>
                    <p>Industry (SIC): {sicDescription}</p>
                    <p>Phone Number: {phone}</p>
                    <p>Entity Type: {entityType}</p>
                    <p>Business Address: {addresses.business.street1}, {addresses.business.city} {addresses.business.stateOrCountry} {addresses.business.zipCode}</p>
                    <p>Mailing Address: {addresses.mailing.street1}, {addresses.mailing.city} {addresses.mailing.stateOrCountry} {addresses.mailing.zipCode}</p>
                    <p>State of Incorporation: {stateOfIncorporation}</p>
                    Stock Symbols
                    <ul>
                        {tickers.map((tickers, index) => (<li key={`tickers-${index}`}>{tickers}</li>))}
                    </ul>
                    Exchanges
                    <ul>
                        {exchanges.map((exchange, index) => (<li key={`exchange-${index}`}>{exchange}</li>))}
                    </ul>
                    Historical Names:
                    <ul>
                        {formerNames.map((formerName, index) => (<li key={`name-${index}`}>{formerName.name} : {formerName.from} to {formerName.to}</li>))}
                    </ul>
                </div>
                )
        }
    } else {
        renderContent = () => {
            return <h1>Loading...</h1>
        }
    }

    return (
        renderContent()
    )
}