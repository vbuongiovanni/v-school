// import express
    const express = require("express");

// declare server variable
    const app = express();

const users = [
    {name : "pete", age: 20},
    {name : "Joe", age: 20},
    {name : "Matt", age: 20},
    {name : "Bob", age: 20}
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
        // avoid verbs in endpoints, since the verb is essentially implied by the HTTP method used. For Example, don't call '/get-tents' is redundent for a GET request.. just call it '/tent/'
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
// design P


// start server
    // with .listen() - has two arguments:
        // 1) port Number
        // 2) callback function - will be ran 
    const port = 9000;
    app.listen(port, () => {console.log(`Server running on ${port}`)})