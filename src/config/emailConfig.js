const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "avishkatest123@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  }
});


module.exports = transporter;