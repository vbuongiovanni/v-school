const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// initialize server
    const app = express();

// start db
    mongoose.connect("mongodb://localhost:27017/related-db-ex", 
    () => console.log("db connected on port 27017"));

// middleware 
    app.use(express.json());
    app.use(morgan("dev"));

// connect routes
    app.use("/books", require("./routes/bookRouter"))
    app.use("/authors", require("./routes/authorRouter"))

// error handling middleware
    app.use((err, req, res, next) => {
        console.log(err);
        res.send({errMsg : err.message});
    })

// start server
    app.listen(9000, () => console.log("listening on port 9000"));