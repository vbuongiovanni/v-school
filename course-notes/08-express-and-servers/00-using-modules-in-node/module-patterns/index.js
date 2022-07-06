
// singular function require

        // multiply.js
        /* 
        module.exports = (a, b) => { // export anonymous function
            return a * b;
        }
        */
    // since the anon function was place directly in .exports, we can name it whatever we want:
    const myMultiplyFunction = require("./multiply");
    console.log(myMultiplyFunction(1, 2))


// multiple function require 

        // math.js
        /* 
        const add = (a, b) => {
            return a + b;
        }
        const subtract = (a, b) => {
            return a - b;
        }
        module.exports = {
            add, // You can use object literals
            subtract : subtract // or spell it out if you are into redundancy.
        }
        */
    // Since .exports is returning an object, we must deconstruct:
    const {add, subtract} = require("./math");
const multiply = require("./multiply");
    console.log(add(5, 5))
    console.log(subtract(20,  5))
    // alternatively, you can call a single function exactly one time:
    console.log(require("./math").add(15, 15))

// Revealing Module Pattern
    // Allows you to encapsulate and hide away functionality/data from outside of a given module
    // only elements that are added to the module.exports are exposed

        // revealingModulePattern.js
        /* 
        let factor = 2;
        function multiplyByFactor(num) {
            return num * factor;
        }
        function setFactor(num) {
            factor = num;
        }
        module.exports = {
            multiplyByFactor,
            setFactor
        };
        */
    const {multiplyByFactor, setFactor} = require("./revealingModulePattern");
    
    console.log("**Factor set to 2");
    console.log(multiplyByFactor(2));
    setFactor(1);
    console.log("**Factor set to 1");
    console.log(multiplyByFactor(2));
    setFactor(100);
    console.log("**Factor set to 100");
    console.log(multiplyByFactor(2));

// Constructor Function Pattern
const User = require("./constructorFunction");

const newUserOne = new User("Pete", 22, 155);
newUserOne.sayHello();
const newUserTwo = new User("Dave", 29, 187);
newUserTwo.sayHello();