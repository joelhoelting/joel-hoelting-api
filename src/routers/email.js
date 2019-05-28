const express = require('express');
const cors = require('cors');

const router = express.Router();
const sendEmail = require('../utils/ses-client');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

router.post('/email/send', cors(corsOptions), (req, res) => {
  let { to, subject, message, from } = req.body;
  from = `${from} <joelhoeltingapi@gmail.com>`;

  sendEmail(to, subject, message, from, (error, data) => {
    if (error) {
      return res.status(400).send(error);
    }
    res.send(data);
  });
});

module.exports = router;
