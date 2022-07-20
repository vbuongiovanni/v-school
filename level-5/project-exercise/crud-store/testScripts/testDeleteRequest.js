const axios = require("axios");
const fs = require("fs");
const {writeFile} = fs;


// clear log file
writeFile("./test-logs/testDeleteRequestLog.txt", "", err => {
    console.log(err)
})


const testDeleteRequest = () => {
    axios.get("http://localhost:9000/inventory/")
        .then(res => {
            res.data.map(item => {
                axios.delete(`http://localhost:9000/inventory/${item._id}`)
                    .then(res => {
                        writeFile("./test-logs/testDeleteRequestLog.txt", item._id + " - Deleted\n", { flag: 'a+' }, err => {
                            console.log(err)
                        })
                    })
                    .catch(err => console.log(err))
            })
        })
        .catch(err => console.log(err))
}

testDeleteRequest()