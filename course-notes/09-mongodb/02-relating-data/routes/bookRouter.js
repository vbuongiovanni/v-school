const express = require("express");
const bookRouter = express.Router();
const Book = require("../models/book");
const Author = require("../models/author");

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

module.exports = bookRouter;