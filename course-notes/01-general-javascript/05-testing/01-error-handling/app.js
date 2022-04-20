

// try-catch-finally statements are exactly the same as java, except you dont need to specify the exception type.

try { // code in try block runs by default.
    if (2 === 2) {

        throw new Error("I am an error!!"); // you can use new Error("some message") to instantiate a custom error.
    }
    console.log("was this console.logged? No.")
} 
catch (err){  // If error occurs, or is thrown, then catch block is ran
    // should be named 'err' by convention.
    console.log(err)
} 
finally {
    console.log("I am in the finally block, so I will run regardless of what happens above.")
}