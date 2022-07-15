const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
const app = express();


// error handling
    // Express has built-in error handling functionality, the problem is that it sends an HTML document back to the client with the error written in the document. 
    // In the case of a REST API, we need JSON, so this wont work.

    // custom error handling can be implemented by adding middleware directly before 'app.listen'.
    // Also, the middleware MUST contain exactly four parameters - 'err', 'req', 'res', and 'next'.
    // This is how express determines that the function is an error handler:


// Implementation: 
    // **Step 1**: we need to add the 'next' parameter to our methods to pass any errors along:
    // **Step 2**: 
        // a.) for synchronous errors, simply 'throw' an error. When an error is throw, express will catch it, then pass it along to the middleware
        // b.) for asynchronous errors, pass the param of the .catch() function 
        // side note... the error shown here is often the one shown to the user... so it should be meaningful.
        // to ensure that you are sending an actual Error object, check the error.message property, since that is where the text will be.
    // **Step 3**: Set status code of response - very import, as other packages, such as axios, uses the status code to know how to treat responses
        // server responses:
            // 200 : Successful 
            // 201 : Successful Insert / Update request
                // 202 : successful change?
            // 401 : Not authorized - this becomes an issue to show that user is not authorized
            // 404 : Not found
            // 500 : Server Error - basically a blanket statement.

    // **Step 4**: send the right error message to the client using custom middleware

app.use(express.json());
app.use(morgan("dev"));

app.get("/puppies", (req, res, next) => { // **Step 1** : add 'next' param
    
    // **Step 2 a.** Syncronous error:
        if (req.query.all === undefined) {
            // **Step 3** set status code of response:
                res.status(400)
            const myErr = new Error("You must include a query called `all` in your request!");
            console.log(myErr.message);
            throw myErr;
        }

    // **Step 2 b.** Asyncronous error:
        // axios.get("")
        //     .then(response => {console.log("Everything worked out fine")})
        //     .catch(err => {
        //         // pass the error forward using next() 
        //         // If express determines that err is an instance of an Error
        //         // it will bypass any other middleware and send it directly to your error
        //         // handling middleware.
        //         // **Step 3** set status code of response:
        //             res.status(500)
        //         next(err);
        //     })

    // standard response:
        res.send({
            puppyOne : "some Puppy",
            puppyTwo : "Different Puppy",
            puppyThree : "Yet, a third puppy Puppy"
        });
})

app.post("/puppies", (req, res, next) => { // **Step 1** : add 'next' param
    const bodyContent = req.body.content
    res.send({
        puppyOne : "some Puppy",
        puppyTwo : "Different Puppy",
        puppyThree : "Yet, a third puppy Puppy",
        puppyPost : bodyContent
    });
});

// **Step 4**: custom middleware
    // as mentioned above, this middleware MUST be right before app.list() AND must have all four params:
app.use((err, req, res, next) => {
    console.log(err.message);
    // note: this will ensure that 1) we know what error is being throw via express console and 2) all errors will have the same shape.
    return res.send({error: err.message})
});

const port = 9000;
app.listen(port, () => console.log(`listening on port ${port}`));