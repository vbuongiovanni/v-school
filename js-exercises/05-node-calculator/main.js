'use strict';

const readlineSync = require("readline-sync");

let num1 = 2;
let num2 = 34;

// calculator functions:

const addFunc = (num1, num2) => num1 + num2;

const subFunc = (num1, num2) => num1 - num2;

const mulFunc = (num1, num2) => num1 * num2;

const divFunc = (num1, num2) => num1 / num2;

const calculatorOperations = {
    add : addFunc,
    sub : subFunc,
    mul : mulFunc,
    div : divFunc,
}

let num1Input;
let num2Input;
let operatorInput;
let command;

while (true) {

    num1Input = readlineSync.question("Please enter your first number: ");
    if (num1Input === "quit"){
        break;
    }
    num2Input = readlineSync.question("Please enter your second number: ");

    num1Input = parseInt(num1Input);
    num2Input = parseInt(num2Input);

    operatorInput = readlineSync.question("Please enter your operation to perform (add, sub, mul, div): ");

    command = calculatorOperations[operatorInput]

    if ((isNaN(num1Input)) | (isNaN(num2Input)) | (typeof command === "undefined")) {
        console.log("Please enter numeric values and a valid entry for the operation")
        continue
    }
    
    console.log(`The result is ${command(num1Input, num2Input)}`);

}