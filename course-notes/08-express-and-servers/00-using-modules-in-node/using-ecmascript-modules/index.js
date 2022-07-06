// These are ECMAScript modules - note that you must add:
//     "type": "module"
// to package.json

/* 
// module1.js
    export default function greeting() {
        return "Hello, from Module 1!"
    }
*/
import greeting from "./module1.js";
console.log(greeting())

/* 
// module1.js
// module1.js
    export default function greeting() {
        return "Hello, from Module 1!"
    }
*/
import {moduleTwoGreeting, moduleTwoInfo} from "./module2.js";
console.log(moduleTwoGreeting())
console.log(moduleTwoInfo())


