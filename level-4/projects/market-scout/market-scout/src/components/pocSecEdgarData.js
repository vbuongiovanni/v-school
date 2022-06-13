const axios = require("axios");
const companyData = Object.values(require("./company_tickers").COMPANY_TICKERS);

const userTicker = "AAPL";

const [returnedCompany] = companyData.filter(company => company.ticker === userTicker);

const cikNumber = returnedCompany.cik_str;

// function to get data from sec.gov
const getEdgarData = (cikNumber) => {
    
    const paddedCIKNumber = "0".repeat(10 - (cikNumber + "").length) + cikNumber

    const options = {
        method: 'GET',
        url: `https://data.sec.gov/api/xbrl/companyfacts/CIK${paddedCIKNumber}.json`
    };

    axios.request(options)
        .then(res => res.data.facts['us-gaap'])
        .then(facts => {
            const {
                // income statement
                Revenues, CostsAndExpenses, IncomeTaxesPaidNet, NetIncomeLoss,
                // balance sheet
                Assets, AssetsCurrent, StockholdersEquity, Liabilities, LiabilitiesCurrent, LongTermDebt,
                // other metrics
                EarningsPerShareBasic, EarningsPerShareDiluted
                
                } = facts;
            return [
                // income statement
                Revenues, CostsAndExpenses, IncomeTaxesPaidNet, NetIncomeLoss,
                // balance sheet
                Assets, AssetsCurrent, StockholdersEquity, Liabilities, LiabilitiesCurrent, LongTermDebt,
                // other metrics
                EarningsPerShareBasic, EarningsPerShareDiluted
            ]
        })
        .then (filteredFacts => {
                filteredFacts = filteredFacts.filter(lineItem => lineItem !== undefined)
                filteredFacts.map(lineItem => {
                    let filteredLineItem
                    try {
                        filteredLineItem = lineItem.units.USD.filter(entry => entry.form === "10-K")
                            .filter(entry => entry.end.substring(0, 4) === String(entry.fy))
                    } catch (error) {
                        filteredLineItem = lineItem.units["USD/shares"].filter(entry => entry.form === "10-K")
                             .filter(entry => entry.end.substring(0, 4) === String(entry.fy))
                    }
                    // console.log(filteredLineItem)
                    lineItem.amounts = filteredLineItem.map(entry => (
                            {
                                filingPeriod : `${entry.fy}-${entry.fp}`, 
                                type : entry.fp.substring(0, 1) === "Q" ? "quarter" : "annual",
                                dateRange : `${entry.start} to ${entry.end}`,
                                value : entry.val,
                            }
                        ))
                    delete lineItem.units;
                })
                return filteredFacts;  
            })
        // .then (filteredFacts => console.log(filteredFacts))
        .catch(error => console.log(error))

}
getEdgarData(cikNumber)

