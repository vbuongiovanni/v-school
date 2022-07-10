const express = require("express");
const app = express();

// add in middleware
    app.use(express.json())
    
    // example custom middleware - note EVERY process MUST end with either a 'next()' or 'res.send()'. 
        // if it ends in next(), the next process will be executed
        // if it ends with res.send(), the response will be sent to client
        // if neither exists, then client will receive a 404 error.
    app.use((req, res, next) => {
        req.body = {...req.body, about : "this body was modified by my custom middleware process"};
        console.log(req.body);
        next();
    })

// handle routes
    app.use("/movies", require("./routes/movieRouter"))
    app.use("/tvshows", require("./routes/tvShowRouter"))

const port = 9000;
app.listen(port, console.log(`Express server is listening on port ${port}`))