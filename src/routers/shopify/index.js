const express = require('express');

const collectionsRouter = require('./collections');

const shopifyRouter = express.Router({mergeParams: true});

shopifyRouter.use('/collections', collectionsRouter);

module.exports = shopifyRouter;
