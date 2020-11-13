const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const awsRouter = require('./routers/aws');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/aws', awsRouter);

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');

// Set up handlebars engine and views location
app.set('view engine', 'pug');
app.set('views', viewsPath);

// Setup directory to serve static assets
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.render('index', { title: 'Joel Hoelting API' });
});

// eslint-disable-next-line
app.listen(port, () => console.log(`Application is listening on port ${port}.`));
