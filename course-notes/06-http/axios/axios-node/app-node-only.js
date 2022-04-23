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

    const newToDo = {"complete" : false, "title" : "This entry was created in JS using axios"};
    
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


