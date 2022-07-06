// These are commonJS modules:

/* 
// module1.js
    module.exports = function() {
        return "Hello, from Module 1!"
    }
*/
const greeting = require("./module1");
console.log(greeting())

/* 
// module1.js
    const moduleTwoGreeting = () => {
        return "Hello, from Module 2!"
    }
    const moduleTwoInfo = () => {
        return "I am also from Module 2, I am just a different function!"
    }
    module.exports = {moduleTwoGreeting, moduleTwoInfo};
*/
const {moduleTwoGreeting, moduleTwoInfo} = require("./module2.js");
console.log(moduleTwoGreeting())
console.log(moduleTwoInfo())


