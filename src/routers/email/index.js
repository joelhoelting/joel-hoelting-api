const express = require('express');

const aws = require('./aws');

const emailRouter = express.Router();

emailRouter.use('/aws', aws);

module.exports = emailRouter;
