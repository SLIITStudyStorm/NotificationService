const transporter = require("./config/emailConfig");

 const emailSender = async (to, subject,message) => {
    try {
        // Send email using the transporter
        const info = await transporter.sendMail({
          from: 'avishkatest123@gmail.com',
          to: to,
          subject: subject,
          text: message
        });
    
        console.log('Email sent:', info.messageId);
        return true;
      } catch (error) {
        console.error('Error sending email:', error);
        return false;
      }
};

module.exports = emailSender;