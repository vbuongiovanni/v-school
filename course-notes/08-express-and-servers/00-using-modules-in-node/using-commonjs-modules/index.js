// These are commonJS modules:

// single element module
    const greeting = require("./logHello");
    greeting()

// multi element module
    const {add, multiply} = require("./mathFuncs.js");
    console.log(add(2, 2))
    console.log(multiply(2, 8))