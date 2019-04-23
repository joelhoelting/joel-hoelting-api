import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

AWS.config.update({
  region: process.env.AWS_REGION
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

export const sendEmail = (to, subject, message, from) => {
  const params = {
    Destination: {
      ToAddresses: [to]
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: message
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject
      }
    },
    ReturnPath: from ? from : process.env.EMAIL_FROM,
    Source: from ? from : process.env.EMAIL_FROM
  };

  ses.sendEmail(params, (err, data) => {
    if (err) {
      return console.log(err, err.stack);
    } else {
      console.log('Email sent.', data);
    }
  });
};
