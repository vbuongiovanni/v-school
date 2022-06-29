import React from "react";

export default function CompanyOverview(props) {

    const {companyDetails} = props;

    const [
        name, cik, phone, ein, stateOfIncorporation, entityType, sicDescription,
        exchanges, tickers, formerNames,
        addresses
    ] = companyDetails;
    
    return (
        <>
        <div className="overview-container module-container">
            <h3 className="overview-company-name">{name}</h3>
            <div className="overview-col col-1">
                <p>
                    <span className="overview-item-title">Central Index Key (CIK):</span> {cik}
                </p>
                <p>
                    <span className="overview-item-title">Entity Identification Number (EIN):</span> {ein}
                </p>
                <p>
                    <span className="overview-item-title">Industry (SIC):</span> {sicDescription}
                </p>
                <div className="overview-list">
                    {(formerNames.length) > 0 &&
                        <>
                            <h4>Historical Names:</h4>
                            <ul>
                                {formerNames.map((formerName, index) => {
                                    return (<li key={`name-${index}`}>{formerName.name} : {formerName.from} to {formerName.to}</li>);
                                    })}
                            </ul>
                        </>
                    }
                    {tickers.length > 1 ?
                        <>
                            <h4>Stock Symbols</h4>
                            <ul>
                                {tickers.map((tickers, index) => (<li key={`tickers-${index}`}>{tickers}</li>))}
                            </ul>
                        </>
                        :
                        <span><span className="overview-item-title">Stock Symbol:</span> {tickers[0]}</span>
                    }
                </div>
            </div>
            <div className="overview-col col-2">
                <p>
                    <span className="overview-item-title">Phone Number: </span> {phone}
                </p>
                <p>
                    <span className="overview-item-title">Entity Type: </span> {entityType}
                </p>
                <p>
                    <span className="overview-item-title">State of Incorporation: </span> {stateOfIncorporation}
                </p>
                <div className="overview-list">
                    {exchanges.length > 1 ?
                        <>
                            <h4>Exchanges</h4>
                            <ul>
                                {exchanges.map((exchanges, index) => (<li key={`exchange-${index}`}>{exchanges}</li>))}
                            </ul>
                        </>
                        :
                        <p><span className="overview-item-title">Exchange:</span> {exchanges[0]}</p>
                    }
                </div>
                <div className="address-container">
                    <h4>Mailing Address:</h4>
                    <p>{addresses.mailing.street1},</p>
                    <p>{addresses.mailing.city} {addresses.mailing.stateOrCountry} {addresses.mailing.zipCode}</p>
                </div>
                <div className="address-container">
                    <h4>Business Address:</h4>
                    <p>{addresses.business.street1},</p>
                    <p>{addresses.business.city} {addresses.business.stateOrCountry} {addresses.business.zipCode}</p>
                </div>
            </div>
        </div>
    </>
    )
}