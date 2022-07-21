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

module.exports = authorRouter;