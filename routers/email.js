const express = require('express');

const router = express.Router();

const sendEmail = require('../utils/ses-client');

router.post('/send-email', (req, res) => {
  sendEmail('heidi.hoelting@web.de', 'Hi love, how are you?', 'This is the body of email');
  res.send('email send');
});

module.exports = router;
