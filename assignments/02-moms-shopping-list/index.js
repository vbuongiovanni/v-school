"use strict";

const form = document["add-item"];

let storageKey;

form.addEventListener("submit", e => {
    e.preventDefault();
    let newListItem = form["item-input"].value;
    storageKey = getStorageKey(0);
    createListItem(newListItem, storageKey);
    form["item-input"].value = "";
})

// function to create new li (with <button> element), given a string name
let createListItem = (itemName, storageKey) => {
    let listItem = document.createElement("li");
    let listItemName = document.createElement("div");
    listItemName.textContent = itemName;
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", e => {
        deleteListItem(e);
    })
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", e => {
        editListItem(e)
    })
    listItem.append(listItemName, editButton, deleteButton);
    listItem.setAttribute("id", storageKey);
    addEntryToStorage(storageKey, itemName);
    document.getElementById("list").append(listItem);
}

// function to delete parent li (will be used by deleteButton)
let deleteListItem = (e) => {
    if(confirm("You are about to delete " + e.target.parentElement.childNodes[0].textContent)){
        delete localStorage[e.target.parentElement.attributes.id.nodeValue];
        e.target.parentElement.remove();
    }
}

// function to edit textContent using popup
let editListItemPopup = (e) => {
    let newItemName = "";
    while (newItemName.length === 0) {
        newItemName = prompt("New item name (entry cannot be blank):", e.target.parentElement.childNodes[0].textContent);
    }
    if (!(newItemName === null)){
        e.target.parentElement.childNodes[0].textContent = newItemName;
    }
}

// functions to edit textContent not using popup
let editListItem = (e) => {
    let editInputField = document.createElement("input");
    let saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", e => {
        saveEdits(e);
    })
    editInputField.value = e.target.parentElement.childNodes[0].textContent;
    let listNode = e.target.parentNode;
    listNode.removeChild(listNode.firstChild);
    listNode.removeChild(listNode.firstChild);
    listNode.prepend(saveButton);
    listNode.prepend(editInputField);
}

// functions to edit textContent not using popup
let saveEdits = (e) => {
    let inputName = document.createElement("div");
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    let listNode = e.target.parentNode;
    let newItemName = e.target.parentElement.childNodes[0].value;
    if (!(newItemName === null) && newItemName.length > 0){
        inputName.textContent = newItemName;
        listNode.removeChild(listNode.firstChild);
        listNode.removeChild(listNode.firstChild);
        listNode.prepend(editButton);
        listNode.prepend(inputName);
    }
}

// function to add field value to localStorage and increment storage key

const addEntryToStorage = (storageKey, itemName) => {
    localStorage[storageKey + ""] = itemName;
}

// function to get max storageKey value to initialize value for new sessions:
const getStorageKey = (storageKey) =>  {
    for (let key in localStorage) {
        storageKey = key > storageKey ? parseInt(key) : storageKey;
    }
    return storageKey + 1;
}

// fill list from localStorage

const fillFromLocalStorage = () => {
    let allKeys = Object.keys(localStorage);
    for (let i = 0; i < allKeys.length; i++) {
        allKeys[i] = parseInt(allKeys[i]);
    }
    for (let key of allKeys.sort()) {
        if ((parseInt(key)*0) === 0){
            createListItem(localStorage.getItem(key), key);
        }
    } 
}

fillFromLocalStorage();

// clear localStorage 

const clearLocalStorage = () =>  {
    for (let key in localStorage) {
        delete localStorage[key];
    }
}

let clearStorageButton = document.getElementById("clear-storage");

clearStorageButton.addEventListener("click", ()=>{
    clearLocalStorage();
    location.reload();
})



