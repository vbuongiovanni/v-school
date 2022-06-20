const express = require('express');
const axios = require("axios");
const {auth} = require("./auth/auth");
const tradeData = require("./auth/tradeData"); // dev only - using static instance of API call to avoid over usage

// server setup and launch
  // instantiate app:
  const app = express();
  // set port
  const port = process.env.PORT || 5000; //Line 3
  // This displays message that the server running and listening to specified port
  app.listen(port, () => console.log(`Listening on port ${port}`)); 

// filter and deconstruct API keys:
  let [rapidApiKey] = auth.filter(authData => authData.source === "rapid")
    .map(authData => authData.key);

  let [twitterKey] = auth.filter(authData => authData.source === "twitter")
    .map(authData => authData.key);

// endpoint setup
  // endpoint for GET requests to the SEC
  app.get('/sec', (req, res) => {

    const {cik, type} = req.query;

    // const cik = 320193;
    // const type = "details";

    // function to company details from SEC
    async function getCompanyDetails(cik, type) {
        
        const paddedCIKNumber = "0".repeat(10 - (cik + "").length) + cik
        const endPoint = type === "details" ? "submissions/" : "api/xbrl/companyfacts/";

        // // set header proxy request to SEC
        const options = {
            method: 'GET',
            headers : {origin : "http://localhost:3000/"},
            url: `https://data.sec.gov/${endPoint}CIK${paddedCIKNumber}.json`
        };

        // set content type of response
        res.set({
          'Content-Type': 'text/plain'
        })

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
              Assets, Liabilities
              // AssetsCurrent, StockholdersEquity,
              //, LiabilitiesCurrent, LongTermDebt,
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
                          value : entry.val,
                      }
                  ))
              delete lineItem.units;
          })

          res.json(financials)

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

    getCompanyDetails(cik, type)

  });

  // endpoint for get requests to alpha-vantage for stock prices (facilitated through rapid-api)
  app.get('/prices', (req, res) => {

    // set content type of response
    res.set({
      'Content-Type': 'text/plain'
    })

    const {stockSymbol} = req.query;
    // const stockSymbol = "MSFT"

    async function getStockPrices(stockSymbol) {
    
      const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
            symbol: stockSymbol, 
            // function: 'TIME_SERIES_MONTHLY_ADJUSTED', 
            function: 'TIME_SERIES_DAILY_ADJUSTED', 
            outputsize: 'compact',
            datatype: 'json'},
        headers: {
          'X-RapidAPI-Key': rapidApiKey, 
          'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
      };
    
      // commented out for debugging to avoid hitting their API too much...
      const response = await axios.request(options);
      const data = await response.data;
      console.log("rapid API hit")
      console.log(data)
    
      const timeSeriesData = data['Time Series (Daily)'];
      
      const timeSeriesDates = Object.keys(timeSeriesData);
      let timeSeriesArray = Object.values(timeSeriesData).map(timeEntry => {
          const [open, high, low, close, adjusted_close, volume, dividend] = Object.values(timeEntry); 
          return {
              open : Number(open),
              high : Number(high),
              low : Number(low),
              close : Number(close),
              adjusted_close : Number(adjusted_close),
              volume : Number(volume),
              dividend : Number(dividend)
          }
      })

      // function to transform above arrays into plotly-ready data
      const getPlotlyData = (dates, value) => {
        const trace1 = {
            x: dates, 
            close: value.map(dataEntry => dataEntry.close), 
            decreasing: {line: {color: '#FF2D00'}}, 
            high: value.map(dataEntry => dataEntry.high), 
            increasing: {line: {color: '#0BAB00'}}, 
            line: {color: 'rgba(31,119,180,1)'}, 
            low: value.map(dataEntry => dataEntry.low), 
            open: value.map(dataEntry => dataEntry.open), 
            type: 'candlestick', 
            xaxis: 'x', 
            yaxis: 'y'
          };
          return [trace1];
        }

      // data for plotly viz:
      const plotData = getPlotlyData(timeSeriesDates, timeSeriesArray)
    
      // layout of plot - second param of plotly viz
    
      lastDate = timeSeriesDates[0]
      firstDate = timeSeriesDates[timeSeriesDates.length - 1]
    
      let maxPrice = 0;
      timeSeriesArray.map(prices => {
        maxPrice = prices.high >= maxPrice ? prices.high : maxPrice;
      })
    
      let layout = {
        dragmode: 'zoom', 
        margin: {
          r: 10, 
          t: 25, 
          b: 40, 
          l: 60
        }, 
        showlegend: false, 
        xaxis: {
          autorange: true, 
          domain: [0, 1], 
          range: [`${firstDate} 12:00`, `${lastDate} 12:00`], 
          rangeslider: {range: [`${firstDate} 12:00`, `${lastDate} 12:00`]}, 
          title: 'Date', 
          type: 'date'
        }, 
        yaxis: {
          autorange: true, 
          domain: [0, 1], 
          range: [0, maxPrice], 
          type: 'linear'
        }
      };
      
      res.json({plotData, layout})
      // res.json({plotData : stockSymbol, layout : "Other test"})
    }
    
    // getStockPrices(stockSymbol)
    res.json(tradeData)


    
  })



