var https = require('https');

const httpsGetRequest = (url, callback) => {
	https.get(url, (res) => {

		let resBody = '';
		res.on('data', (data) => {
			resBody += data;
		});

		res.on('end', () => {
			callback(resBody);
		});

		res.on('error', (e) => {
			throw e;
		});
	}).end();
}

module.exports = httpsGetRequest;