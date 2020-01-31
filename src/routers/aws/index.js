const express = require('express');

const emailRouter = require('./email');

const awsRouter = express.Router();

awsRouter.use('/email', emailRouter);

module.exports = awsRouter;
