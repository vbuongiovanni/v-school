require('dotenv').config()

// routes.js
const router = require('express').Router()
const path = require('path')
const nodemailer = require('nodemailer')

const transport = {
    //this is the authentication for sending email.
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use TLS
    //create a .env file and define the process.env variables 
    auth: {
        type: "login",
        user: process.env.SMTP_TO_EMAIL,
        pass: process.env.SMTP_TO_PASSWORD,
    },
}

const transporter = nodemailer.createTransport(transport)
    transporter.verify((error, success) => {
    if (error) {
        //if error happened code ends here
        console.error("something went wrong")
    } else {
        //this means success
        console.log('Ready to send mail!')
    }
})

router.get('/', (req, res, next) => {
    res.status(200).json({ msg: 'Working' })
    })

router.post('/', (req, res, next) => {
    //make mailable object
    const mail = {
        from: process.env.SMTP_FROM_EMAIL,
        to: process.env.SMTP_TO_EMAIL,
        subject: 'New Contact Form Submission',
        text: `It worked!`,
    }
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail',
            })
        } else {
            res.json({
                status: 'success',
            })
        }
    })
})

// All remaining requests return the React app, so it can 
router.use('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '/react-ui/build', 'index.html'))
})

module.exports = router