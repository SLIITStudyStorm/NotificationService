const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

router.post('/send-notification', notificationController.sendNotification);

// get all notifications for a specific email
router.get('/notifications', notificationController.getNotifications);

module.exports = router;
