const express = require("express")
const inventoryRouter = express.Router()
const InventoryModel = require("../models/inventory")

// simple endpoint - no param: '/inventory'
    inventoryRouter.route("/")
        .get((req, res, next) => {
            InventoryModel.find((err, item) => {
                if (err) {
                    res.status(500);
                    return next(err)
                }
                res.status(200);
                res.send(item);
            })
        })
        .post((req, res, next) => {
            const inventoryData = req.body;
            const newInventory = new InventoryModel(inventoryData)
            newInventory.save((err, item) => {
                if (err) {
                    res.status(500);
                    return next(err)
                }
                res.status(201);
                res.send(item);
            })
        })

// extended endpoint - w/ param: '/inventory/:_id'
    inventoryRouter.route("/:_id")
        .get((req, res, next) => {
            const {_id} = req.params;
            InventoryModel.findOne({_id : _id}, (err, item) => {
                if (err) {
                    res.status(500);
                    return next(err)
                }
                res.status(200);
                res.send(item);
            })
        })
        .put((req, res, next) => {
            const {_id} = req.params;
            const inventoryData = req.body;
            InventoryModel.findOneAndUpdate(
                    {_id : _id},
                    inventoryData,
                    {new : true},
                    (err, updatedItem) => {
                        if (err) {
                            res.status(500);
                            return next(err)
                        }
                        res.status(200);
                        res.send(updatedItem);
                    }
            )
        })
        .delete((req, res, next) => {
            const {_id} = req.params;
            InventoryModel.findOneAndDelete({_id : _id}, (err, deletedItem) => {
                if (err) {
                    res.status(500);
                    return next(err)
                }
                res.status(200);
                res.send(`Successful deletion of the item ID ${deletedItem._id}`);
            })
        })

module.exports = inventoryRouter;