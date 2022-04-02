'use strict'
// Qualifier - add "JavaScript Made this!!" to header in large bold font
// also add "[name] wrote the JavaScript" to sub-header

const newPrimaryHeader = document.createElement("p");
const newSecondaryHeader = document.createElement("p");
const newSecondaryHeaderName = document.createElement("span");

newPrimaryHeader.textContent = "JavaScript Made this!!"
newPrimaryHeader.className = "primary header";

newSecondaryHeaderName.textContent = "Vince ";
newSecondaryHeaderName.className = "name"

newSecondaryHeader.textContent = "wrote the JavaScript"
newSecondaryHeader.className = "secondary header";

newSecondaryHeader.prepend(newSecondaryHeaderName);

const existingHeader = document.getElementById("header");

existingHeader.append(newPrimaryHeader);
existingHeader.append(newSecondaryHeader);

/* 
Bronze - There's some sub par conversation going on in this messaging app. 
You have two tasks to help give it either a clean slate, or a positive start.
- Write some custom JavaScript to automatically change the words of the conversation to something fun and good.
- Write some JavaScript that will wait until the user clicks the "clear" button, and then clears out all conversation.
 */

const messageElements = document.getElementsByClassName("message");
const messageDiv = document.getElementById("message-board");

const fun = /serious/;
const partyPatrol = /police/;
const blank = /don't/;
const awesomeDude = /simple farmer/;

let textContent = "";

for (let message of messageElements) {
    textContent = message.textContent.replace("police", "party patrol");
    textContent = textContent.replace("serious", "seriously awesome");
    textContent = textContent.replace("I don't want to talk", "Does it pertain to me? I am not sure if I want to talk about it...");
    textContent = textContent.replace("I'm just a simple farmer", "Righteous! Let's rage.");
    message.textContent = textContent;
}

const clearButton = document.getElementById("clear-button");

function clearMessages(){
    messageDiv.innerHTML = "";
}

clearButton.addEventListener("click", clearMessages);

/* 
Silver - Use the drop down to write some JavaScript that will notice when the drop down has changed and then changes the background colors of the messages accordingly.
*/

let rightMessages = document.getElementsByClassName("right");
let leftMessages = document.getElementsByClassName("left");
let themeValue = document.getElementById("theme-drop-down");


function iterateLeftBackgroundChange(messages, newColor){

    for (let element of messages) {
        element.style.backgroundColor = newColor;
    }

}

function updateTheme(){
    switch (themeValue.value) {
        case "theme-one": 
            iterateLeftBackgroundChange(rightMessages, "lightblue");    
            iterateLeftBackgroundChange(leftMessages, "burlywood");
            break;
        case "theme-two": 
            iterateLeftBackgroundChange(rightMessages, "red");    
            iterateLeftBackgroundChange(leftMessages, "grey");
            break;
        case "theme-three": 
            iterateLeftBackgroundChange(rightMessages, "green");    
            iterateLeftBackgroundChange(leftMessages, "purple");
            break;
        case "theme-four": 
            iterateLeftBackgroundChange(rightMessages, "yellow");    
            iterateLeftBackgroundChange(leftMessages, "lightblue");
            break;
    }

}

themeValue.addEventListener("change", updateTheme);

/* 
Gold - be able to add more messages.
extra credit - alternate side of new messages
*/

const inputValue = document.getElementById("input");
const sendButton = document.getElementById("send-input");

let existingMessages ;
let existingMessageSide;
let newMessageElement;
let messageSide = "";

function sendInput(){
    if (inputValue.value === ""){
        return "";
    }
    existingMessages = document.querySelectorAll(".right, .left");
    newMessageElement = document.createElement("div");
    try {
        existingMessageSide = existingMessages[existingMessages.length - 1].classList[1];
    } catch {
        existingMessageSide = "left";
    }
    if(existingMessageSide === "right"){
        messageSide = "left";
    } else if (existingMessageSide === "left") {
        messageSide = "right";
    } else {
        messageSide = "right";
    }
    newMessageElement.className = "message " + messageSide;
    newMessageElement.textContent = inputValue.value;
    messageDiv.append(newMessageElement);
    inputValue.value = "";
}

sendButton.addEventListener("click", sendInput);