// import express
    const express = require("express");
// impor uuid, a handy function to deal with ids. Note that we will use v4
    const {v4 : uuid} = require('uuid')

// optional import - this is a seperate npm package to get the location of an IP address
const geoip = require("geoip-lite")

// declare server variable
    const app = express();

const users = [
    {_id : uuid(), name : "pete", age: 34},
    {_id : uuid(), name : "Joe", age: 19},
    {_id : uuid(), name : "Matt", age: 24},
    {_id : uuid(), name : "Bob", age: 29}
]

// Vocab:

// Resource: A single instance of an object. For example, a specific brand/model of snowboard.
// Collection: A collection of similar objects, e.g.: all the mountain bikes (any brand, any model) that our store sells.
// Base (or Root) URL: The beginning part of the URL used for all requests against our API. Usually looks something like `http://api.equipment.com/v1` or `http://equipment.com/api/v1`. The `v1` indicates that this is the first version of your API, which eventually you may decide to refactor/change and create a second, more updated version. This doesn't mean you can't make changes to your API once you've created it, but rather allows you to distinguish your different APIs if you decide to do a major overhaul of the entire API.
// API Endpoint: The part that comes after the Base URL. Usually looks something like `/ski` or `/ski/:skiId`.
// Parameters: placeholder for data when making requests. This is denoted as ":nounId". e.g., `/ski/:skiId`.

// Query (query string): means of filtering passing information to server. They are ampersand separated and are key-value pairs. which is . e.g., `/ski/:skiId?brand=armada&length=180`.

// Client: The person/machine that is consuming the information from your API. In our course, this will usually be a browser application (like an Angular app running in a Chrome browser), but could also be an iOS or Android app, or even another server reaching out to our API for data.
// Server: The machine your API is running on.
// Request method: The kind of operation we want to perform on the database. Available options are GET, POST, PUT, and DELETE. GET is for retrieving (reading) data, POST is for creating (writing) new data, PUT is for updating data, and DELETE is for removing data.

// Port :
    // stay between 4000 and @ or below 9000

// Route : 
    // similar to event listener relating to a specific endpoint
        // this captures the applicable 'verb' associated with an request. All of which will relate to CRUD

// Endpoint : 
    // "/item" "/user"

    // setting up endpoints (or, 'Mount path')
        // note that there methods relating to the app object, including are .get(), .put(), .put(), and .delete()
        // each method takes two params - 
            // endpoint
            // callback function, which will run when API is his. note that the callback function receives
                // req and res, which represents request and response.

app.get("/users", (req, res) => {
    console.log("API was hit")
    // note that express will automatically render the javascript object into JSON before sending:
    res.send(users)
})

// Representational State Transfer (REST) principals
    // not all inclusive.. just the basics:
        // in essence, the endpoints should REPRESENT the STATE of the data being transfer.
        // endpoints should be given a noun describing the content that will be received back. Can be either singular or plural... but probably singular
        // avoid verbs in endpoints, since the verb is essentially implied by the HTTP method used. For Example, don't call '/get-tents' is redundant for a GET request.. just call it '/tent/'
        // HTTP Methods:
            // GET
                // batch request - "/noun"
                // request a single item within list - "/noun/:id"
                // nested design, where the response is a list of items that relate to a specific single parent item - "/noun/:id/components"
            // POST
                // Add new item/entity - "/noun"
                // a unique ID will be added upon post
            // PUT
                // Update existing item - "/noun/:id"
            // DELETE
                // delete existing item - "/noun/:id"

// UUID - creates unique IDs. this can be facilitated by using the NPM package 'uuid' 

// Middleware - A function that fires on the inbetween, meaning it is an added function that runs by the API before the response is sent back to the client.

    // Example:  Note that we need to add additional configurations to allow requests to expect a 'body'. 
        // this is an example of using 'middleware'.
        // we can accomplish this by using the app.use(mountPath, callbackFunction) method
            // note that the .use() has two params:
                // mountPath - (e.g., '/'). Note that that mountPath is optional. if omitted, the middleware will be executed on all requests.
                // middleware - callbackFunction that will be ran when request is sent to mountPath 
                    // (e.g., 'express.json()', which looks for a request body, if available, it will parse the JSON into a javascript Objet and turns it into a 'req.body')

    // app.use("/", express.json())
    app.use(express.json()) // by leaving out "/", the CB middleware function will be executed on all requests, BEFORE the request is sent back

app.post("/users", (req, res) => {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (ip.includes('::ffff:')) {
        ip = ip.split(':').reverse()[0]
    }
    console.log(`
    IP Address: ${ip}
    Location: ${geoip.lookup(ip)}
    `)
    users.push(
        {...req.body, _id : uuid()} // add req.body, along with a new uuid, to users 
    ) 
    res.send(users) // send users back to client
})


// start server
    // with .listen() - has two arguments:
        // 1) port Number
        // 2) callback function - will be ran 
    const port = 9000;
    app.listen(port, () => {console.log(`Server running on ${port}`)})