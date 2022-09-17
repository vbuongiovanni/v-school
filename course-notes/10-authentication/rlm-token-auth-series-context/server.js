const express = require("express");
const app = express();
// this allows us to access content from .env file.
// specific variables can be called with "process.env.VARIABLE_NAME_DECLARED_IN_ENV_FILE"
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
var {expressjwt} = require("express-jwt");

app.use(express.json());
app.use(morgan("dev"));

mongoose.connect(
  "mongodb://localhost:27017/user-authentication",
  () => console.log("Connected to the DB")
);


app.use("/auth", require("./routes/authRouter.js"));

// set up and implement express-jwt middleware
  // express-jwt listens for requests to specific endpoint and checks for a token with a secret
  // that matches the secret on the server. express-jwt doesn't allow requests to be fulfilled
  // unless secret match.
  // expressjwt() a required singe param - an object consisting of {secret : str, algorithms : []}
  
app.use("/api", expressjwt({secret : process.env.SECRET, algorithms: ['HS256']})) // this is the API endpoint that will be guarded by 
app.use("/api/todo", require("./routes/todoRouter.js"));

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "Unauthorized")
  return res.send({errMsg: err.message});
});

app.listen(9000, () => {
  console.log(`Server is running on local port 9000`);
});