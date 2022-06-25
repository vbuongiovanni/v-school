const axios = require("axios");

const getCompanyDetails = async (cik, type, res) => {
        
    const paddedCIKNumber = "0".repeat(10 - (cik + "").length) + cik
    const endPoint = type === "details" ? "submissions/" : "api/xbrl/companyfacts/";

    // // set header proxy request to SEC
    const options = {
        method: 'GET',
        headers : {origin : "http://localhost:3000/"},
        url: `https://data.sec.gov/${endPoint}CIK${paddedCIKNumber}.json`
    };

    const response = await axios.request(options);
    const data = await response.data;

    // if original request type from React App is of type "financials", perform preprocessing on response:
    if (type === "financials") {

      const {
        // income statement
        Revenues, CostsAndExpenses, IncomeTaxesPaidNet, NetIncomeLoss,
        // balance sheet
        Assets, AssetsCurrent, StockholdersEquity, Liabilities, LiabilitiesCurrent, LongTermDebt,
        // other metrics
        EarningsPerShareBasic, EarningsPerShareDiluted
      } = data.facts["us-gaap"];
  
      // consolidated metrics of interest into array
      let financials = [
          // income statement
          // Revenues, CostsAndExpenses, IncomeTaxesPaidNet, NetIncomeLoss,
          // balance sheet
          Assets, Liabilities,
          AssetsCurrent, StockholdersEquity,
          LiabilitiesCurrent, LongTermDebt
          // other metrics
          // EarningsPerShareBasic, EarningsPerShareDiluted
      ]

      financials = financials.filter(lineItem => lineItem !== undefined)

      financials.map(lineItem => {
          let filteredLineItem
          try {
              filteredLineItem = lineItem.units.USD.filter(entry => entry.form === "10-K")
                  .filter(entry => entry.end.substring(0, 4) === String(entry.fy))
          } catch (error) {
              filteredLineItem = lineItem.units["USD/shares"].filter(entry => entry.form === "10-K")
                      .filter(entry => entry.end.substring(0, 4) === String(entry.fy))
          }
          lineItem.amounts = filteredLineItem.map(entry => (
                  {
                      filingPeriod : `${entry.fy}-${entry.fp}`, 
                      type : entry.fp.substring(0, 1) === "Q" ? "quarter" : "annual",
                      dateRange : `${entry.start} to ${entry.end}`,
                      value : new String(entry.val).length >= 7 ? (entry.val / 1000000).toLocaleString("en-US") + "Mil" : (entry.val / 1000).toLocaleString("en-US") + "K",
                  }
              ))
          delete lineItem.units;
      })

      // filter to show only the 3 most recent filings
      financials = financials.map(lineItem => {
        const newAmounts = lineItem.amounts.filter((amount, index) => index >= (lineItem.amounts.length - 3));
        return {
          ...lineItem,
          amounts : newAmounts
          }
      })

      // instantiate Header via set operation
      let headers = new Set()
      headers.add("Type")

      // map through all lineItems to extract label, filingPeriod, and value
      let content = financials.map(lineItem => {
          const values = lineItem.amounts.map(amount => {
              const {filingPeriod, value} = amount;
              headers.add(filingPeriod)
              return {filingPeriod, value};
          })
          return [lineItem.label, ...values];
      })

      // create columns of data to ensure values of different types coincide
      // correctly with filing periods.
      let columns = []
      headers.forEach(header => {
          const matchedValues = content.map(lineItem => {
              const [matchedLineItem] = lineItem.filter(value => value.filingPeriod === header);
              return matchedLineItem === undefined ? lineItem[0] : matchedLineItem;
          })
          columns.push([header, ...matchedValues]) 
      })

      // pivot columns into rows  (as needed by ReactDataSheet)
      // and prepare values for datasheet:
      let rows = [];
      for (let i in columns[0]) {
          rows.push(new Array())
      }

      // Map through columns to fill in rows and apply class names as needed
      columns.map(column => {
          column.map((cell, index) => {
              if (typeof cell === "string"){
                  rows[index].push({
                      value : cell,
                      disableEvents : true,
                      className : `financials-table-cell financials-table-label
                          ${rows[index].length === 0 ? "financials-table-row-label" : ""}
                          ${index === 0 ? "financials-table-header" : ""}
                          ${index === (rows.length - 1) ? "financials-table-bottom" : ""}`
                  });
              } else {
                  rows[index].push({
                      value : cell.value,
                      readOnly : true,
                      className : `financials-table-cell ${index === (rows.length - 1) ? "financials-table-bottom" : ""}`
                  })
              }
          })
      })

      // add in additional empty rows for user to work/edit with:
      for (let i = rows.length; i < 20; i++){
          rows.push(new Array())
          const requiredEmptyCells = rows[0].length;
          for (let j = 0; j < requiredEmptyCells; j++) {
              rows[i].push({
                  value : "",
                  expr : "",
                  className : `financials-table-cell`
              })
          }
      }

      res.json(rows) 

    } else { // otherwise, just return the object

      // deconstruct response
      const {name, cik, phone, ein, stateOfIncorporation, entityType, sicDescription, 
          exchanges, tickers, // arrays
          addresses, // objects
      } = data

      let {formerNames} = data
      
      formerNames = formerNames.map(formerName => {
          return {...formerName, 
              from : formerName.from.slice(0, 10), 
              to : formerName.to.slice(0, 10)}
      })

      res.json([ 
        name, cik, phone, ein, stateOfIncorporation, entityType, sicDescription, 
          exchanges, tickers, formerNames, // arrays
          addresses, // objects
      ])
    }
}

module.exports = getCompanyDetails;