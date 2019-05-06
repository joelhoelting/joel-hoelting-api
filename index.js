const express = require('express');
require('dotenv').config();

const emailRouter = require('./routers/email');

const app = express();
const port = 3001;

app.use(emailRouter);

app.listen(port, () => console.log(`Application is listening on port ${port}!`));
