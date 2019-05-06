const express = require('express');

const router = express.Router();

const sendEmail = require('../utils/ses-client');

router.post('/send-email', (req, res) => {
  const sendToEmail = 'joelhoelting@protonmail.com';
  sendEmail(sendToEmail, 'Hi man, how are you?', 'This is the body of email', '"HeidiHoelting.com" <joelhoeltingapi@gmail.com>');
  res.send('Email successfully sent');
});

module.exports = router;
