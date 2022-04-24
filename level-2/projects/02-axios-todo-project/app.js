
// Open items:
    // need to make separate button for delete functionality
    // step 5
    // wrap up/clean up css styling

const newEntry =  document["new-entry"];
let user = newEntry.user.value;

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
        "description" : newEntry.description.value,
        "price" : newEntry.price.value,
        "imgUrl" : newEntry.imgUrl.value,
        "completed" : newEntry.completed.value
    }

    axios.post(getURL(user), userInput)
    .then(res => {
        getToDos(user);
        console.log("post request was successful")
    })
    .catch(err => console.log("something went wrong with the post request"))
}


const toggleCompleted = (user, id, args) => {    
    axios.put(getURL(user, id), args)
    .then(res => console.log(`put update of completed status request was successful`))
    .catch(err => console.log("something went wrong with the post request"))
}

// initialize list:
getToDos(user);



// postToDo(user, userInput)

// function that takes a to-do item from the API, generates/populates HTML elements/content,
// and appends it to the DOM.

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
            newCheckItem.addEventListener("dblclick", (e) => deleteToDo(e))
        newButtonContainer.appendChild(newCheckItem);

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
}

// delete item
function deleteToDo(e){
    const parent = e.target.parentNode.parentNode;
    let confirmationResult = confirm("You are about to delete to-do item.\nEither OK or Cancel.");
    if (confirmationResult) {
        axios.delete(getURL(user, parent.getAttribute("id")))
            .then(res => console.log("To-Do deleted"))
            .catch(err => console.log("Delete request failed."))
        getToDos(user);
    }
}


// while-loop to run through list and remove all elements.

function clearList() {
    while (document.getElementById("list").firstChild) {
        document.getElementById("list").removeChild(document.getElementById("list").firstChild)
    }
}

function getURL (user, entryId = ""){
    return `https://api.vschool.io/${user}/todo/${entryId}`;
} 
