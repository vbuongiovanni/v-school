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

// implementation of editing functionality:

    // function 1/2: changes icon to 'save' icons and converts selected entry's span elements into editable input entries:

        const startEdits = (e) => {

            e.target.setAttribute("src", "res/save-icon.png");

            const children = e.target.parentNode.parentNode.parentNode.children;
            let titleValue = [];
            let priceValue = [];
            let descriptionValue = [];
            let imageValue = [];

            // extract existing values:

            for (let element of children) {
                titleValue.push(classToValue(element, "title"))
                priceValue.push(classToValue(element, "price"))
                descriptionValue.push(classToValue(element, "description"))
                imageValue.push(element.getAttribute("class").indexOf("item-image") !== -1 ? element.getAttribute("src") : "")
            }

            while (children.length > 1) {
                e.target.parentNode.parentNode.parentNode.removeChild(children[children.length - 1]);
            }
            
            // place existing values into object:

            exitingValues = {
                title : titleValue.join(""),
                price : priceValue.join(""),
                description : descriptionValue.join(""),
                imgUrl : imageValue.join("")
            }

            // replace existing html elements w/ inputs:

            e.target.parentNode.parentNode.parentNode.append(createEditHtmlElements(exitingValues));

        }

            // function will return textContent if the given an htmlElement has the desiredClass. 
            function classToValue(htmlElement, desiredClass){
                return htmlElement.getAttribute("class").indexOf(desiredClass) !== -1 ? htmlElement.textContent : "";
            }

            // function takes object of existing values, corresponding to an edited to-do item, and returns a single HTML object that can be appended to DOM

            function createEditHtmlElements({title, price, description, imgUrl}) {

                const editContainer = document.createElement("div");
                editContainer.setAttribute("id", "edit-container");

                const editTitle = document.createElement("input");
                    editTitle.setAttribute("id", "title-edit");
                    editTitle.value = title;
                const editPrice = document.createElement("input");
                    editPrice.setAttribute("id", "price-edit");
                    editPrice.value = price;
                const editDescription = document.createElement("textArea");
                    editDescription.setAttribute("id", "description-edit");
                    editDescription.value = description;
                const editImageUrl = document.createElement("input");
                    editImageUrl.setAttribute("id", "image-edit");
                    editImageUrl.value = imgUrl;
                
                editContainer.append(editTitle, editPrice, editDescription, editImageUrl);

                return(editContainer)

            }

    // function 2/2: changes icon to 'edit' icons, sends put request to v-school API, and changes HTML back to spans from input elements.


    const saveEdits = (e) => {

        e.target.setAttribute("src", "res/edit-icon.png");

        // update v-school API using put request:

        const updateParameters = {
            "title" : document.getElementById("title-edit").value,
            "price" : document.getElementById("price-edit").value,
            "description" : document.getElementById("description-edit").value,
            "imgUrl" : document.getElementById("image-edit").value
        }

        const entryID = e.target.parentNode.parentNode.parentNode.getAttribute("id");

        axios.put(getURL(user, entryID), updateParameters)
            .then(() => "List update Successful")
            .catch(() => "List update Failed")

        // remove input fields:
        e.target.parentNode.parentNode.parentNode.removeChild(document.getElementById("edit-container"));
        

        // append updated nodes:
        console.log(e.target.parentNode.parentNode.parentNode);
        createSavedHtmlElements(e.target.parentNode.parentNode.parentNode, updateParameters);
        
    }

        function createSavedHtmlElements(housingParentNode, {title, price, description, imgUrl}) {

            // Title element
                const newTitle = document.createElement("span");
                newTitle.setAttribute("class", "title");
                newTitle.textContent = title;

            // Price element
                const newPrice = document.createElement("span");
                newPrice.setAttribute("class", "price");
                newPrice.textContent = price === null ? "0.00" : price;;

            // Description element
                const newDescription = document.createElement("span");
                newDescription.setAttribute("class", "description");
                newDescription.textContent = description;

            // Image element
                const newImage = document.createElement("img");
                newImage.setAttribute("class", "item-image");
                newImage.src = imgUrl;

            // changing attributes to completed, if applicable

            if (housingParentNode.parentNode.firstChild.firstChild.textContent === '\u2713') {
                newTitle.setAttribute("class", "title completed");
                newDescription.setAttribute("class", "description completed");
            }
            
            housingParentNode.append(newTitle, newPrice, newDescription, newImage);

        }
        
    const forkFunctionEditSave = (e) => {
        if (e.target.parentNode.firstChild.getAttribute("src") === "res/edit-icon.png") {
            startEdits(e);
        } else {
            saveEdits(e);
        }
    }

// support functions

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
                const newEditItem = document.createElement("div");
                newEditItem.setAttribute("class", "edit-item");
                newEditItem.addEventListener("click", (e) => forkFunctionEditSave(e));
                    const editImage = document.createElement("img");
                    editImage.src = "res/edit-icon.png";
                    newEditItem.append(editImage);
            newButtonContainer.append(newCheckItem, newDeleteItem, newEditItem);

        // Title element
            const newTitle = document.createElement("span");
            newTitle.setAttribute("class", "title");
            newTitle.textContent = title;
        
        // Price element
            const newPrice = document.createElement("span");
            newPrice.setAttribute("class", "price");
            newPrice.textContent = price === null ? "0.00" : price;

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

        axios.put(getURL(user, parent.getAttribute("id")), {"completed" : (putStatus.join("").indexOf("completed") === -1 ? false : true)})
            .then(res => console.log(`put update of completed status request was successful`))
            .catch(err => console.log("something went wrong with the post request"))

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



// initialize list:

getToDos(user);
