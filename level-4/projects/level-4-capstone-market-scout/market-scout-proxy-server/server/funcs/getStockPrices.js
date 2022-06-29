const axios = require("axios");

const getStockPrices = async (stockSymbol, rapidApiKey, res) => {
      
    // commented out for debugging to avoid hitting their API too much...
    let response
    let data;
    let options;
    let timeSeriesData;
    let timeSeriesDates;
    let timeSeriesArray;

    try {
      options = {
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
      response = await axios.request(options);
      data = await response.data;
      console.log("rapid API hit - Alpha Vantage")
      timeSeriesData = data['Time Series (Daily)'];
      timeSeriesDates = Object.keys(timeSeriesData).slice(0, 30);
      timeSeriesArray = Object.values(timeSeriesData).map(timeEntry => {
        return {
            open : Number(timeEntry['1. open']),
            high : Number(timeEntry['2. high']),
            low : Number(timeEntry['3. low']),
            close : Number(timeEntry['4. close']),
            adjusted_close : Number(timeEntry['5. adjusted close']),
            volume : Number(timeEntry['6. volume']),
            dividend : Number(timeEntry['7. dividend amount'])
        }
      }).slice(0, 30)

    } catch (error) {
      options = {
        method: 'GET',
        url: 'https://stock-prices2.p.rapidapi.com/api/v1/resources/stock-prices/6mo',
        params: {ticker: stockSymbol},
        headers: {
          'X-RapidAPI-Key': rapidApiKey, 
          'X-RapidAPI-Host': 'stock-prices2.p.rapidapi.com'
        }
      };
      response = await axios.request(options);
      timeSeriesData = await response.data;
      timeSeriesData = timeSeriesData
      console.log("rapid API hit - Stock Prices")
      timeSeriesDates = Object.keys(timeSeriesData).reverse().slice(0, 30);
      timeSeriesArray = Object.values(timeSeriesData).map(timeEntry => {
        return {
            open : Number(timeEntry.Open),
            high : Number(timeEntry.High),
            low : Number(timeEntry.Low),
            close : Number(timeEntry.Close),
            volume : Number(timeEntry.Volume),
            dividend : Number(timeEntry.Dividend)
        }
      }).reverse().slice(0, 30)
    }
    
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
      // xaxis: {
      //   autorange: true, 
      //   tick0: `${firstDate} 12:00`,
      //   dtick: 86400000.0,
      //   domain: [0, 1], 
      //   range: [`${firstDate} 12:00`, `${lastDate} 12:00`], 
      //   rangeslider : {visible: false},
      //   title: 'Date', 
      //   type: 'date'
      // }, 
      xaxis: {
        autorange: true, 
        tick0: 0,
        categoryorder : "array",
        categoryarray : timeSeriesDates.reverse(),
        dtick: 2,
        domain: [0, 1], 
        range: [0, timeSeriesDates.length - 1], 
        rangeslider : {visible: false},
        type: 'category'
      }, 
      yaxis: {
        autorange: true, 
        domain: [0, 1], 
        fixedrange : true,
        range: [0, maxPrice*1.05], 
        type: 'linear'
      }
    };
    
    res.json({plotData, layout})
}

module.exports = getStockPrices;