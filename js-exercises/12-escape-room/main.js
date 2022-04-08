'use strict';

const readlineSync = require("readline-sync");

const welcomeMessage = "You find yourself in a dimly lit room with a single closed door... There is a dresser, a nightstand, and a treasure chest on top of a tacky rug. However, there is a dark hole in the wall that looks really promising. Maybe we should check that out first?";

const option1 = "Open the door";
const option1ResponseLocked = "\n\nYou try to turn the door knob but no luck... it's either broken, welded shut, or maybe, just maybe, it's locked with key."
const option1ResponseUnlocked = "\n\nYou did it! You're free!";

const option2 = "Open the chest and look through the contents";
const option2Response = "\n\nYou open the dusty chest and find an absolute mess - there's piles of clothes and some old National Geographic magazines... Maybe you should look in here again??";
const option3 = "Look through the drawer of the nightstand";
const option3Response = "\n\nUgh.. completely empty.";
const option4 = "Search under the rug";
const option4Response = "\n\nWhoa! a secret compartment... and look! Here is a key! I wonder what it is to...";
const option5 = "Scream for help";
const option5Response = "\n\nAfter screaming for help for 45 minutes, you find yourself parched... and it doesn't seem like this is all that productive. It looks like you are on your own to get out of this mess!";
const option6 = "Put your hand in the hole";
const option6Response = "\n\nYou feel a prick on your finger... suddenly you feel chest pain - oh no! it was cyanide!";

const optionsMessage = `\nMake a selection - what will you do?\n1: ${option1}\n2: ${option2}\n3: ${option3}\n4: ${option4}\n5: ${option5}\n6: ${option6}\n`;

let hasKey = false;
let isEscaped = false;
let isDead = false;
const validOptions = [1, 2, 3, 4, 5, 6];

let userInput = 0;
console.log(welcomeMessage);

while(true) {

    if (isDead) {
        break;
    }
    if (isEscaped) {
        break;
    }
    console.log(optionsMessage);

    while(userInput === 0){
        userInput = readlineSync.question("What ever will you do to escape!? \n");
        userInput = parseInt(userInput);
        if(validOptions.indexOf(userInput) === -1) {
            console.log("Please enter a valid option:")
            userInput = 0;
        }
    }

    if (userInput === 1){
        if(hasKey) {
            console.log(option1ResponseUnlocked);
            isEscaped = true;
        } else {
            console.log(option1ResponseLocked);
        }
        userInput = 0;
    }

    if (userInput === 2){
        console.log(option2Response);
        userInput = 0;
    }

    if (userInput === 3){
        console.log(option3Response);
        userInput = 0;
    }

    if (userInput === 4){
        console.log(option4Response);
        hasKey = true;
        userInput = 0;
    }

    if (userInput === 5){
        for(let i = 0; i <= 10; i++){
            console.log("Haaaaalp!")
            console.log("Hellp!")
            console.log("Anyone!?")
        }
        console.log(option5Response);
        userInput = 0;
    }

    if (userInput === 6){
        console.log(option6Response);
        isDead = true;
        userInput = 0;
    }

}





