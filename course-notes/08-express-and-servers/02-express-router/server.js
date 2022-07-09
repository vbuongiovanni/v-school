const express = require("express");
const app = express();

// Express Router - 
    // built into express library
    // enables us to modularize routes, or implement a Modular File Organization, 
        // meaning that individual files perform specific tasks
        // note that we need to make some modifications to existing endpoints to prevent redundancy.
        // additionally, routes are connected to express 'app' via .use() method

// Middleware
    app.use(express.json());

// Routes - implementation of express router:
    app.use("/movies", require("./routes/movieRouter"))
    app.use("/tvshows", require("./routes/tvShowRouter"))

const portNumber = 9000
app.listen(portNumber, () => {console.log(`Server listening on port ${portNumber}`)})