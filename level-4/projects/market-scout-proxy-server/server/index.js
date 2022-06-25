const express = require('express');
const axios = require("axios");
const {auth} = require("./auth/auth");

const tradeData = require("./auth/tradeData"); // **dev only** - using static instance of API call to avoid over usage
const tweetData = require("./auth/tweetData"); // **dev only** - using static instance of API call to avoid over usage

const getTwitterData = require("./funcs/getTwitterData");
const getStockPrices = require("./funcs/getStockPrices");
const getCompanyDetails = require("./funcs/getCompanyDetails");

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
    // set content type of response
    res.set({
      'Content-Type': 'text/plain'
    })
    // deconstruct query params from request
    const {cik, type} = req.query;
    getCompanyDetails(cik, type, res);
  });

  // endpoint for get requests to alpha-vantage for stock prices (facilitated through rapid-api)
  app.get('/prices', (req, res) => {
    // set content type of response
    res.set({
      'Content-Type': 'text/plain'
    })
    // deconstruct query params from request
    const {stockSymbol} = req.query;
    getStockPrices(stockSymbol, rapidApiKey, res) // **dev only** - using static instance of API call to avoid over usage
    // res.json(tradeData) // **dev only** - using static instance of API call to avoid over usage
  })

  // endpoint for GET requests to twitter
  app.get('/tweets', (req, res) => {
    // set content type of response
    res.set({
      'Content-Type': 'text/plain'
    })
    // deconstruct query params from request
    const {stockSymbol} = req.query;
    getTwitterData(stockSymbol, twitterKey, res) // **dev only** - using static instance of API call to avoid over usage
    // res.json(tweetData) // **dev only** - using static instance of API call to avoid over usage
  })
