const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.AWS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

const sendEmail = (to, subject, message, from) => {
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
    ReturnPath: from,
    Source: from
  };
  
  ses.sendEmail(params, (error, data) => {
    if (error) {
      console.log(error);
      return false;
    }
    console.log(data);
    return true;
  });
};

module.exports = sendEmail;
