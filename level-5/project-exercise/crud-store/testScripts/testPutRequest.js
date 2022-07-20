const axios = require("axios");
const fs = require("fs");
const {writeFile} = fs;

// clear log file
writeFile("./test-logs/testPutRequestLog.txt", "", err => {
    console.log(err)
})

const updatedItem = {
    name : "Some Updated Titled",
    prodDescription : "Some Updated Description",
    price : 999999999,
    inStock : false
}

const testPutRequest = () => {
    axios.get("http://localhost:9000/inventory/")
        .then(res => {
            res.data.map(item => {
                axios.put(`http://localhost:9000/inventory/${item._id}`, updatedItem)
                    .then(res => {
                        const requestString = `
Updated added Item:
    _id: ${res.data._id}
    Product: ${res.data.name}
    Description: ${res.data.prodDescription}
    Price: ${res.data.price}
    In Stock: ${res.data.inStock}
\n
                        `
                        writeFile("./test-logs/testPutRequestLog.txt", requestString, { flag: 'a+' }, err => {
                            console.log(err)
                        })
                    })
                    .catch(err => console.log(err))
            })
        })
        .catch(err => console.log(err))
}

testPutRequest()