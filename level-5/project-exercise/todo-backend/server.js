import express from "express";
import toDoRouter from "./toDoRouter.js";
import morgan from "morgan"; // middleware logger
const app = express();

app.use(express.json());
app.use(morgan('dev')); // this logs requests to console.. very handy for debugging networking errors
app.use("/todo", toDoRouter);

const port = 9000;
app.listen(port, () => console.log(`Express server listening on port ${port}`));