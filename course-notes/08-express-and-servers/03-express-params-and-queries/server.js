const express = require("express");
const app = express();

// url parameters:
    // URL Parameters are parameters whose values are set dynamically in a page's URL.
    // They are part of the URL route that is being called by the client.
    // accessed in express using req.params
    // When practicing REST in your API structure, you'll usually structure your routes like this:
        // "/noun/<id>" or "tent/123132412342131"

// query string (sometimes confusingly referred to as "url parameters"):
    // should be used for any sort of filtering
    // Notice that the query strings are `{ key: value }` pairs in a slightly different format: `?key1=value1&key2=value2&key3=value3`:
    // `?` initiates the query string key/value pair
    // `=` assigns the key to the value
    // `&` separates each key/value pair

// Middleware
    app.use(express.json());

// Routes - implementation of express router:
    app.use("/movies", require("./routes/movieRouter"));
    app.use("/tvshows", require("./routes/tvShowRouter"));

const portNumber = 9000;
app.listen(portNumber, () => {console.log(`Server listening on port ${portNumber}`)});