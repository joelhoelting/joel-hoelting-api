const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const emailRouter = require('./routers/email');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(emailRouter);

app.listen(port, () => console.log(`Application is listening on port ${port}!`));
