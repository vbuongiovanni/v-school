const express = require("express");
const app = express();

app.use(express.json())

app.use("/", require("./middlewareProcess"))

app.get("/", (req, res) => {
    res.send({
        message : "content of request body:",
        content : req.body
    })
})

const port = 9000;
app.listen(port, () => {console.log(`express server listening on port ${port}`)})