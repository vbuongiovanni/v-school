const express = require('express')
const cluster = require('cluster')
const numCPUs = require('os').cpus().length

const app = express()
const morgan = require('morgan')
const path = require('path')

const PORT = process.env.PORT || 5000

// Priority serve any static files.
// Replace the example to connect to your frontend.
app.use(express.static(path.join(__dirname, '/example/frontend.js')))

// dev middleware
app.use(morgan('dev'))

// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const routes = require('./routes/routes')

// after all middleware functions
app.use('/', routes)

app.listen(PORT, function () {
   console.error(
       `Node listening on port ${PORT}`
   )
})