const express = require("express");
const morgan = require("morgan");
const app = express();

// add in middleware
    app.use(express.json());
    app.use(morgan("dev"));

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