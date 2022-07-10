const express = require("express");

const middlewareProcess = (res, req, next) => {
    res.body = {...res.body, message : "this was added via middleware defined in middlewareProcess.js"}
    next()
}
module.exports = middlewareProcess;