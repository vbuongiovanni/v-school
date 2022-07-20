const axios = require("axios");
const fs = require("fs");
const {writeFile} = fs;

// clear log file
writeFile("./test-logs/testPostRequestLog.txt", "", err => {
    console.log(err)
})

const newInventory = [
    {
        name : "Rubber Raft",
        prodDescription : "Rubber raft for floating on water",
        price : 75,
        inStock : true
    },
    {
        name : "Radio",
        prodDescription : "Radio that plays music",
        price : 10,
        inStock : true
    },
    {
        name : "Satellite Radio",
        prodDescription : "Satellite Radio - plays music from multiple sources!",
        price : 65,
        inStock : true
    },
    {
        name : "Headphones",
        prodDescription : "Generic Headphones",
        price : 10,
        inStock : false
    },
    {
        name : "Jabra Headphones",
        prodDescription : "Fancy Headphones",
        price : 90,
        inStock : true
    },
]

const postInventoryItem = (newInventory) => {
    axios.post("http://localhost:9000/inventory/", newInventory)
        .then(res => {
            const requestString = `
Newly added Item:
    _id: ${res.data._id}
    Product: ${res.data.name}
    Description: ${res.data.prodDescription}
    Price: ${res.data.price}
    In Stock: ${res.data.inStock}
\n
            `
            writeFile("./test-logs/testPostRequestLog.txt", requestString, { flag: 'a+' }, err => {
                console.log(err)
            })
        })
        .catch(err => console.log(err))
}

newInventory.map(inventoryItem => postInventoryItem(inventoryItem))