

const express = require("express");
const serverless = require("serverless-http");
const cors = require('cors')
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();
const { createTransport } = require('nodemailer');

app.use(cors());


//configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: "fadilamanosi@gmail.com",
        pass: "iwaexsbdiwrgtzjx",
    },
});




router.post("/", async (req, res) => {

    var message = "";
    var status = 200;


    const mailOptions = {
        from: 'fadilamanosi@gmail.com',
        to: 'fadilamanosi@gmail.com',
        subject: req.body.subject,
        text: 'Message from ' + req.body.name + ': ' + req.body.message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            status = 400;
            message = "An error occured while sending mail, try again."
        } else {
            message = "Email was successfully sent."
        }
    });


    res.status(status).json({
        message: message
    });
});

app.use('/.netlify/functions/api', router);

module.exports = app;
module.exports.handler = serverless(app);