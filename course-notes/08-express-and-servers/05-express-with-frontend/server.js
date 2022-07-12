const express = require("express");
const app = express();

// add in middleware
    app.use(express.json())

// handle routes
    app.use("/movies", require("./routes/movieRouter"))
    app.use("/tvshows", require("./routes/tvShowRouter"))

const port = 9000;
app.listen(port, console.log(`Express server is listening on port ${port}`))