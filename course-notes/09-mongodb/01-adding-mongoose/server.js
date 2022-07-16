const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

// add in middleware
    app.use(express.json());
    app.use(morgan("dev"));

// connecting to BD
    // mongoose.connect() is a method allowing you to create a connection to a local mongodb
        // note that you can use mongolab to connect to remote databases
    // the first argument is a uri 
        // "mongodb://localhost:PORT_NUMBER/DATABASE_NAME?options..."
        // or..
        // "mongodb://USERNAME:PASSWORD@HOST:PORT_NUMBER/DATABASE_NAME?options..."
        // See 'https://mongoosejs.com/docs/connections.html' for additional details:

const dbName = "moviesdb";
const portNumber = "27017";
mongoose.connect(`mongodb://localhost:${portNumber}/${dbName}`,
    () => console.log(`connected to database '${dbName}' on port ${portNumber}`))

// handle routes
    app.use("/movies", require("./routes/movieRouter"));
    app.use("/tvshows", require("./routes/tvShowRouter"));

// error handling middleware
    // need all four params to tell express that this is error handling.
    // note that, on the client side, the error will come through via 'err' argument of the .catch() method. 
    app.use((err, req, res, next) => {
        console.log(err)
        res.send({errorMessage : err.message})
    })

const port = 9000;
app.listen(port, console.log(`Express server is listening on port ${port}`));