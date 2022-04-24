// axios example
    // note: axios returns a promise

const axios = require("axios");


name = "vinceb"
url = `https://api.vschool.io/${name}/todo/`

// get requests
    // axios has a simple .get() method - only a url is required.
        
    axios.get(url)
        .then(res => console.log(res.data))
        .catch(error => console.log("Something went wrong in my get request...."))
    
// put requests

    const editedToDo = {"complete" : true, "title" : "This entry was edited in JS using axios"};
    let _id = "6260ce4a18d1a05bceae5083";

    axios.put(url + _id, editedToDo)
        .then(res => console.log(res.data))
        .catch(error => console.log("Something went wrong in my put request...."))

// post requests

    const newToDo = {"complete" : false, 
            "title" : "Oranges",
            "description" : "juicy spherical fruit that are orange in color",
            "price" : 5.99,
            "imgUrl" : "https://images.heb.com/is/image/HEBGrocery/000375170-2?id=DNnRj3&fmt=jpg&dpr=off&fit=constrain,1&wid=196&hei=196"};
    
    axios.post(url, newToDo)
        .then(res => console.log(res.data))
        .catch(error => console.log("Something went wrong in my post request...."))


// delete requests (let by put request)


    axios.post(url, {"complete" : true, "title" : "This entry was created in JS using axios, but I you'll never see it because it will be deleted right now."})
        .then(res => console.log(res.data))
        .catch(error => console.log("Something went wrong in my post request...."))
    
    axios.get(url)
        .then(res => res.data[(res.data.length - 1)]._id)
        .then(idToDelete => axios.delete(url + idToDelete))
        .then(res => console.log("Entry successfully deleted"))
        .catch(error => console.log("Something went wrong in my delete request...."))


