const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'avishkatest123@gmail.com',
    pass: 'rvhe fqfh npka kfan',
  },
});

module.exports = transporter;
