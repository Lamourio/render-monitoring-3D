const nodemailer = require("nodemailer");
require('dotenv').config(); 

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.USER_ID,
        pass: process.env.USER_KEY,
    },
});

function sendMail() {
    let mailOptions = {
        from: {
            name : "DESKTOP-gtth8bk",
            address : process.env.USER_EMAIL_FROM
        },
        to: process.env.USER_EMAIL_TO,
        subject:"DESKTOP-gtth8bk",
        text: "stopped",
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
            // do something useful
        }
    });
}


exports.sendMail = sendMail ;