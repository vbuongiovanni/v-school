const express = require("express");
const app = express();

app.use("/inventory", require("./inventoryRouter"));

const port = 9000;
app.listen(port, () => {console.log(`express server listening on port ${port}`)});