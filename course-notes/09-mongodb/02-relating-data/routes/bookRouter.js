const express = require("express");
const bookRouter = express.Router();
const Book = require("../models/book");
const Author = require("../models/author");
const book = require("../models/book");

bookRouter.route("/")
    .get((req, res, next) => {
        Book.find((err, books) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.send(books);
        })
    })
    .post((req, res, next) => {
        const {author} = req.body;
        let authorId;
        const postNewBook = bookData => {
            const newBook = new Book(bookData);
            newBook.save((err, addedBook) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }
                res.send(addedBook);
            })
        }
        Author.findOne({name : author}, (err, returnedAuthor) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            // if author doesn't exist, add him/her:
            if (returnedAuthor === null) {
                const newAuthor = new Author({name : author});
                newAuthor.save((err, addedAuthor) => {
                    if (err) {
                        res.status(500);
                        return next(err);
                    }
                    authorId = addedAuthor.id;
                    postNewBook({...req.body, author : authorId})
                })
            // otherwise, just run the POST request
            } else {
                authorId = returnedAuthor.id;
                postNewBook({...req.body, author : authorId})
            }
        })
    })

bookRouter.get("/:authorId", (req, res, next) => {
    const {authorId} = req.params
    console.log(authorId)
    Book.find({author : authorId}, (err, books) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        res.send(books);
    })
})

// like a book! increment the like property using the '$inc' method.
    bookRouter.put("/like/:bookId", (req, res, next) => {
        Book.findOneAndUpdate(
            {_id : req.params.bookId}, 
            {$inc : {likes : 1}}, // for mongodb operators, the general syntax is: {$<action> : {<dbProperty> : <param>}}
                // in this case, we are incrementing the 'likes' property by 1.
            {new : true},
            (err, updatedBook) => {
                res.send(updatedBook)
            })
    })

// find books by like range (low to high)
bookRouter.get("/search/bylikes", (req, res, next) => {
    // start by using .where() method of the Model object:
        // note that if we use where(), you must use .exec() at the end
        // .exec() then returns either err or the returned values:
    Book.where("likes").gte(5).exec((err, books) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        res.send(books);
    })
})


module.exports = bookRouter;