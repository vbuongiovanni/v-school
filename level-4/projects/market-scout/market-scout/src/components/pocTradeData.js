const axios = require("axios");
const fs = require("fs")

const options = {
  method: 'GET',
  url: 'https://alpha-vantage.p.rapidapi.com/query',
  params: {symbol: 'MSFT', function: 'TIME_SERIES_MONTHLY_ADJUSTED', datatype: 'json'},
  headers: {
    'X-RapidAPI-Key': 'f89e11b69dmshd8eed087b141bfdp1a4675jsnad56d0e6eedc',
    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
  }
};

// axios.request(options).then(function (response) {
//     // const data = JSON.stringify(response.data);
//     // fs.writeFile("sampleStockData.json", data, 'utf8', function (err) {
//     //     if (err) {
//     //         console.log("An error occured while writing JSON Object to File.");
//     //         return console.log(err);
//     //     }
 
//     //     console.log("JSON file has been saved.")
//     // });
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

const responseData = require("./sampleStockData"); // mimics the response.data of the above shown above.
const timeSeriesData = responseData['Monthly Adjusted Time Series'];

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

