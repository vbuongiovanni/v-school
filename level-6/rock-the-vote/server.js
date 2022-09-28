import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import pkg from "express-jwt";
const {expressjwt} = pkg;
import dotenv from "dotenv";
dotenv.config();

// import routes
  import loginRoute from "./routes/loginRouter.js";
  import issueRoute from "./routes/issueRouter.js";
  import commentRoute from "./routes/commentRouter.js";

const app = express();
// connect to database
mongoose.connect("mongodb://localhost:27017/rock-the-vote", () => console.log("Connected to MongoDB."));

// middleware
app.use(express.json());
app.use(morgan("dev"));

// routes
  // for creating new users and logging in:
  app.use("/user", loginRoute);

  // set up jwt restricted route:
  app.use("/api", expressjwt({secret : process.env.SECRET, algorithms: ['HS256']}));
    // routes behind jwt restrictions
    app.use("/api/issue", issueRoute);
    app.use("/api/comment", commentRoute);
    
// error handling
app.use((err, req, res, next) => {
  return res.send({errMsg : err.message});
});

app.listen(9000, () => console.log("server is listening on port 9000."));