const AWS = require('aws-sdk');
const awsconfig = require('../config/awsconfig');

AWS.config.update({
  accessKeyId: awsconfig.aws.key,
  secretAccessKey: awsconfig.aws.secret,
  region: awsconfig.aws.ses.region
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
    ReturnPath: from || awsconfig.aws.ses.from.default,
    Source: from || awsconfig.aws.ses.from.default
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
