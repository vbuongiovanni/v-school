import express, { application } from "express";
import ToDo from "./ToDo.js";

const toDoRouter = express.Router();

const toDos = [
    new ToDo(
        "Buy Apples", 
        "Exchange money for apples at local supermarket",
        "http://tny.im/sIe")
    ,
    new ToDo(
        "Buy oranges", 
        "Exchange money for oranges at local supermarket",
        "http://tny.im/sIf")
    ];

toDoRouter.route("/")
    .get((req, res) => {
        res.send(toDos)
    })
    .post((req, res) => {
        const {name, description, imageUrl} = req.body;
        if (name !== undefined) {
            const newToDo = new ToDo(
                name, 
                description,
                imageUrl)
            toDos.push(newToDo);
            res.send(newToDo)
        } else {
            res.send("'name' field cannot be blank.")
        }
    })
toDoRouter.route("/:id")
    .get((req, res) => {
        const {id} = req.params;
        const filteredId = toDos.find(todo => todo._id === id);
        res.send(filteredId);
    })
    .delete((req, res) => {
        const {id} = req.params;
        const idIndex = toDos.findIndex(todo => todo._id === id);
        toDos.splice(idIndex, 1);
        res.send(toDos);
    })
    .put((req, res) => {
        const {id} = req.params;
        const idIndex = toDos.findIndex(todo => todo._id === id);
        console.log(req.body)
        Object.assign(toDos[idIndex], req.body)
        res.send(toDos[idIndex]);
    })
    

export default toDoRouter;