// These are ECMAScript modules - note that you must add:
//     "type": "module"
// to package.json

import greeting from "./logHello.js";
greeting(); // Hello, from logHello.js, imported via ECMAScript Modules!

import {add, multiply} from "./mathFuncs.js";
console.log(add(2, 2)); //
console.log(multiply(2, 8)); //