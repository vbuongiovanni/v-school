import React, {useContext} from "react";
// const axios = require("axios");
// const fs = require("fs")
import axios from "axios";

export default function PocTradeData(props){

  const API_KEY = props.apiKey;

  const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {symbol: 'MSFT', function: 'TIME_SERIES_MONTHLY_ADJUSTED', datatype: 'json'},
    headers: {
      'X-RapidAPI-Key': API_KEY, 
      'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
      // const data = JSON.stringify(response.data);
      // fs.writeFile("sampleStockData.json", data, 'utf8', function (err) {
      //     if (err) {
      //         console.log("An error occured while writing JSON Object to File.");
      //         return console.log(err);
      //     }
  
      //     console.log("JSON file has been saved.")
      // });
  	console.log(response.data);
  }).catch(function (error) {
  	console.error(error);
  });

  // const responseData = require("./sampleStockData"); // mimics the response.data of the above shown above.
  // const timeSeriesData = responseData['Monthly Adjusted Time Series'];

  // const timeSeriesDates = Object.keys(timeSeriesData);
  // let timeSeriesArray = Object.values(timeSeriesData).map(timeEntry => {
  //     const [open, high, low, close, adjusted_close, volume, dividend] = Object.values(timeEntry); 
  //     return {
  //         open : Number(open),
  //         high : Number(high),
  //         low : Number(low),
  //         close : Number(close),
  //         adjusted_close : Number(adjusted_close),
  //         volume : Number(volume),
  //         dividend : Number(dividend)
  //     }
  // })

    // sample data - this will all be supplied by API
    const stockDates = ['2022-06-10', '2022-05-31', '2022-04-29', '2022-03-31', '2022-02-28',
        '2022-01-31', '2021-12-31', '2021-11-30', '2021-10-29', '2021-09-30']

    const stockData = [
    {open: 47.88, high: 49.06, low: 44.9, close: 46.45, adjusted_close: 40.7389, volume: 626810606, dividend: 0},
    {open: 46.89, high: 50.045, low: 46.73, close: 47.81, adjusted_close: 41.9317, volume: 523008240, dividend: 0.31},
    {open: 46.27, high: 46.97, low: 42.1, close: 46.95, adjusted_close: 40.9172, volume: 853297059, dividend: 0},
    {open: 45.43, high: 47.57, low: 44.53, close: 46.36, adjusted_close: 40.403, volume: 860084532, dividend: 0},
    {open: 43.21, high: 45.47, low: 42.21, close: 45.43, adjusted_close: 39.5925, volume: 513429400, dividend: 0.28},
    {open: 41.86, high: 45.71, low: 41.05, close: 43.16, adjusted_close: 37.3832, volume: 731616500, dividend: 0},
    {open: 40.95, high: 42.29, low: 39.86, close: 41.7, adjusted_close: 36.1187, volume: 555779700, dividend: 0},
    {open: 40.2401, high: 40.97, low: 38.51, close: 40.94, adjusted_close: 35.4604, volume: 574362900, dividend: 0.28},
    {open: 41.15, high: 41.66, low: 38.9, close: 40.4, adjusted_close: 34.7519, volume: 746113500, dividend: 0},
    {open: 37.92, high: 41.5, low: 37.495, close: 40.99, adjusted_close: 35.2594, volume: 778425700, dividend: 0}
    ]

    // function to transform above arrays into plotly-ready data
    const getPlotlyData = (dates, value) => {
        const trace1 = {
            x: dates, 
            close: value.map(dataEntry => dataEntry.close), 
            decreasing: {line: {color: '#7F7F7F'}}, 
            high: value.map(dataEntry => dataEntry.high), 
            increasing: {line: {color: '#17BECF'}}, 
            line: {color: 'rgba(31,119,180,1)'}, 
            low: value.map(dataEntry => dataEntry.low), 
            open: value.map(dataEntry => dataEntry.open), 
            type: 'candlestick', 
            xaxis: 'x', 
            yaxis: 'y'
          };
          return [trace1];
    }

    const data = getPlotlyData(stockDates, stockData);

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
          range: ['2017-01-03 12:00', '2017-02-15 12:00'], 
          rangeslider: {range: ['2017-01-03 12:00', '2017-02-15 12:00']}, 
          title: 'Date', 
          type: 'date'
        }, 
        yaxis: {
          autorange: true, 
          domain: [0, 1], 
          range: [114.609999778, 137.410004222], 
          type: 'linear'
        }
    };
      
  // <Plot data={data} layout={layout}/>


  return (
    <h1>pocTradeData</h1>
  )
}