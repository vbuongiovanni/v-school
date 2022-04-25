
// Open items:
    // need to make separate button for delete functionality
    // step 5
    // wrap up/clean up css styling

const newEntry =  document["new-entry"];
let user = "vinceb";

// clear and populate list with get request:

const getToDos = (user) => {
    axios.get(getURL(user))
    .then(res => {
        clearList();
        res.data.forEach(element => {
            createToDo(element)
        })
    })
    .catch(err => console.log("something went wrong with the get request"))
}

// post new to-do

const postToDo = (user) => {
    
    const userInput = {
        "title" : newEntry.title.value,
        "description" : newEntry.desc.value,
        "price" : newEntry.price.value,
        "imgUrl" : newEntry.image.value,
        "completed" : false
    }
    console.log(userInput);

    axios.post(getURL(user), userInput)
        .then(res => {
            getToDos(user);
            console.log("post request was successful")
        })
        .catch(err => console.log("something went wrong with the post request"))
}

// event listener to post new to-do:

newEntry.addEventListener("submit", e => {
    e.preventDefault();
    postToDo(user);
    getToDos(user);
    clearInputs();
})

// function to change styling/put status change of check'ed item:

const toggleCompleted = (user, id, args) => {    
    axios.put(getURL(user, id), args)
    .then(res => console.log(`put update of completed status request was successful`))
    .catch(err => console.log("something went wrong with the post request"))
}


// initialize list:
getToDos(user);



// support functions - declarations:

// function that takes a to-do item from the API, generates/populates HTML elements/content, and appends it to the DOM.

function createToDo({title, description, price, imgUrl, _id, completed}){
    
    // main list
        const newListContainer = document.createElement("li");
        newListContainer.setAttribute("class", "entry");
        newListContainer.setAttribute("id", _id);
    
    // Check-box element
        const newButtonContainer = document.createElement("div");
        newButtonContainer.setAttribute("class", "button-container");
            const newCheckItem = document.createElement("div");
            newCheckItem.setAttribute("class", "check-item");
            newCheckItem.addEventListener("click", (e) => toggleStatus(e))
            const newDeleteItem = document.createElement("div");
            newDeleteItem.setAttribute("class", "delete-item");
            newDeleteItem.addEventListener("click", (e) => deleteToDo(e))
                const deleteImage = document.createElement("img");
                deleteImage.src = "res/delete.jpg";
                newDeleteItem.append(deleteImage);
        newButtonContainer.append(newCheckItem, newDeleteItem);

    // Title element
        const newTitle = document.createElement("span");
        newTitle.setAttribute("class", "title");
        newTitle.textContent = title;
    
    // Price element
        const newPrice = document.createElement("span");
        newPrice.setAttribute("class", "price");
        newPrice.textContent = price;

    // Description element
        const newDescription = document.createElement("span");
        newDescription.setAttribute("class", "description");
        newDescription.textContent = description;

    // Image element
        const newImage = document.createElement("img");
        newImage.setAttribute("class", "item-image");
        newImage.src = imgUrl;

    // if complete, add '.complete' class to description and title

        if (completed) {
            newTitle.setAttribute("class", "title completed");
            newDescription.setAttribute("class", "description completed");
            newCheckItem.textContent = '\u2713';
        }

    // Assemble List Object:
        newListContainer.append(newButtonContainer, newTitle, newPrice, newDescription, newImage)
    
    // add to DOM
    document.getElementById("list").appendChild(newListContainer);

}

// function to toggle status and change css formatting

function toggleStatus(e){
    const parent = e.target.parentNode.parentNode;
    const children = e.target.parentNode.parentNode.children;
    let childAttributes;
    let completeIndicator;
    let putStatus = [];
    for (let element of children) {
        childAttributes = element.getAttribute("class");
        completeIndicator = childAttributes.indexOf("completed") === -1 ? childAttributes + " completed" : childAttributes.replace(" completed", "");
        if ((childAttributes.indexOf("title") >= 0) || (childAttributes.indexOf("description") >= 0)) {
            element.setAttribute("class", completeIndicator);
            putStatus.push(element.getAttribute("class"));
        }
    }
    toggleCompleted(user, parent.getAttribute("id"), {
        "completed" : (putStatus.join("").indexOf("completed") === -1 ? false : true)
    })
    e.target.textContent = (putStatus.join("").indexOf("completed") === -1 ? "" : '\u2713')

}

// delete item
function deleteToDo(e){
    const parentID = e.target.parentNode.parentNode.parentNode.getAttribute("id");
    let confirmationResult = confirm("You are about to delete to-do item.\nEither OK or Cancel.");
    if (confirmationResult) {
        axios.delete(getURL(user, parentID))
            .then(res => {
                console.log("To-Do deleted");
                getToDos(user);
            })
            .catch(err => console.log("Delete request failed."))
    }
}

// while-loop to run through list and remove all elements.

function clearList() {
    while (document.getElementById("list").firstChild) {
        document.getElementById("list").removeChild(document.getElementById("list").firstChild)
    }
}

// creates v-school url

function getURL (user, entryId = ""){
    return `https://api.vschool.io/${user}/todo/${entryId}`;
} 

// clear input form (e.g., w/o refresh of page)

function clearInputs(){
    newEntry.title.value = "";
    newEntry.desc.value = "";
    newEntry.price.value = "";
    newEntry.image.value = "";
}
