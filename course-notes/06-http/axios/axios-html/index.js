// axios - w/ file.html

name = "vinceb";

url = `https://api.vschool.io/${name}/todo`;


/* // get all:
axios.get(url)
    .then(res => console.log(res.data))
    .catch(error => console.log("something went wrong w/ my get request"))

// get one:
axios.get(url + "/" + "6260ce4a18d1a05bceae5083")
    .then(res => {
        document.getElementById("axios-response").textContent = "I pulled this into the dom using axios - " + res.data.title;
    })
    .catch(error => console.log("something went wrong w/ my get request"))

//  */


// post

const myForm = document.todoform;

myForm.addEventListener("submit", e => {
    e.preventDefault();

    let newToDo = {
        title : myForm.title.value,
        description : myForm.title.value,
        completed : false
    };

    axios.post(url, newToDo)
        .then(res => console.log(res.data))
        .catch(err => console.log("something went wrong in my post request!"))
})

// put get

const myResponseForm = document.responses;

myResponseForm.addEventListener("submit", e => {
    e.preventDefault();
    clearList();
    let listElement;
    listElement = document.createElement("p");
    listElement.textContent = "Give us a second... we're putting your list together!";
    document.getElementById("axios-response").appendChild(listElement);
    
    axios.get(url)
        .then(res => {
            document.getElementById("axios-response").removeChild(listElement);
            let toDoTitle;
            res.data.forEach(element => {
                listElement = document.createElement("li");
                toDoTitle = document.createElement("h4");
                toDoTitle.textContent = element.title;
                listElement.textContent = `ID ${element._id} - Is Completed? ${element.completed} : ${element.description}.`;
                listElement.prepend(toDoTitle)
                document.getElementById("axios-response").appendChild(listElement);
            }) 
        })
        .catch(err => console.log("something went wrong in my post request!"))
})

// delete

const deleteForm = document["delete"];

deleteForm.addEventListener("submit", e => {
    e.preventDefault();

    axios.delete(url + "/" + deleteForm["delete-id"].value)
        .then(res => {
            console.log(res.data)
            document.getElementById("axios-delete-response").textContent = res.data.msg;
        })
        .catch(err => console.log("Something went wrong with the delete request"))

})

// put request

const myEditForm = document["todoform-edit"];

myEditForm.addEventListener("submit", e => {

    let requestBody = {
        title : myEditForm.title.value,
        description : myEditForm.description.value,
        completed : false
    };

    axios.put(url + "/" + myEditForm.id.value, requestBody)
        .then(res => console.log(res.data))
        .catch(err => console.log("something went wrong in my post request!"))
})



function clearList(){
    const list = document.getElementById("axios-response");
    while (list.firstChild)
    list.removeChild(list.firstChild)
}


