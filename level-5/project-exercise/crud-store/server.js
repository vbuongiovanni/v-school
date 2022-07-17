const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// instantiate server
    const app = express();

// connect to db
    mongoose.connect("mongodb://localhost:27017/crud-store", 
        () => console.log('MongoDB connected on port 27017')
    )

// setup middleware 1) to parse/accept json formatted bodies and 2) log requests using Morgan
    app.use(express.json());
    app.use(morgan("dev"));

// link in route
    app.use("/inventory", require("./routes/inventoryRouter"))

// set up middleware to handle errors

    app.use((err, req, res, next) => {
        console.log(err);
        res.send({errorMessage : err.message});
    })

app.listen(9000, () => console.log("Express server listening on port 9000"))