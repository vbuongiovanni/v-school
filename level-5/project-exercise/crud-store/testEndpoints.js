const axios = require("axios");


const existingDocuments = []
const newDocuments = [
    {},
]

axios.get("http://localhost:9000/inventory/")
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
