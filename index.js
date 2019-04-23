import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3001;

import { sendEmail } from './ses-client';

app.get('/', (req, res) => {
  // sendEmail('joelhoelting@protonmail.com', 'Hey! Welcome', 'This is the body of email');

  res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
