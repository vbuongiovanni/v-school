const express = require("express");
const authorRouter = express.Router()
const Author = require("../models/author")

authorRouter.route("/")
    .get((req, res, next) => {
        Author.find((err, authors) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            res.send(authors)
        })
    })
    .post((req, res, next) => {
        const authorData = req.body;
        const newAuthor = new Author(authorData);
        
        newAuthor.save((err, addedAuthor) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            res.send(addedAuthor)
        })
    })


// get authors by search term w/ '$regex' operator
authorRouter.get("/search", (req, res, err) => {
    const {searchTerm} = req.query;
    
    // note that since $regex requires us to make regex object from a string:
    const pattern = new RegExp(searchTerm)

    Author.find(
        // $regex operator is implemented in the first param of the .find() / findOne() / etc.
        // the syntax is {<propertyToSearch> : {$regex : <RegExpPattern>, $options : <options>}}
        {name : {$regex : pattern, $options : 'i'}},
        (err, authors) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.send(authors);
    })

})

module.exports = authorRouter;