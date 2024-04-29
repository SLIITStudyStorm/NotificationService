const express = require('express');
const emailSender = require('./src/emailSender');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

// email send route
app.post('/send-emails', (req, res) => {
    const { recipientEmails, emailSubject, emailText } = req.body;

    // Validate the request body
    if (!Array.isArray(recipientEmails) || !recipientEmails.length) {
        return res.status(400).send('Invalid request body.');
    }

    // Send emails asynchronously
    const emailPromises = recipientEmails.map(recipientEmail => {
        return emailSender(recipientEmail, emailSubject, emailText);
    });

    Promise.all(emailPromises)
        .then(results => {
            // Check if any email sending failed
            const success = results.every(result => result === true);
            if (success) {
                res.send('Emails sent successfully.');
            } else {
                res.status(500).send('Some emails failed to send.');
            }
        })
        .catch(error => {
            console.error('Error sending emails:', error);
            res.status(500).send('Error sending emails.');
        });
});



app.listen(4000, () => {
    console.log('Server is running on port 4000');
    });

