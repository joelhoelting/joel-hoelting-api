const express = require('express');
const httpsGetRequest = require('../../utils/http/https_get_request');

const collectionsRouter = express.Router({ mergeParams: true });

const storeWhiteList = ['WE_WILL_NOT_BE_SILENT']

const determineEnvVariables = (req, res, next) => {
	const storeParams = req.params.store.toUpperCase();

	if (!storeWhiteList.includes(storeParams)) {
		return res.status(500).send(`Store must be one of the following: ${storeWhiteList.join(', ')}`)
	}

	req.shopifyKey = process.env[`SHOPIFY_KEY_${storeParams}`]
	req.shopifyPassword = process.env[`SHOPIFY_PASSWORD_${storeParams}`]
	req.shopifyStore = process.env[`SHOPIFY_STORE_${storeParams}`]
	next()
}

// http://localhost:3001/shopify/we_will_not_be_silent/collections/15267954728?filter=name&filter=handle

collectionsRouter.get('/:collectionId', determineEnvVariables, (req, res) => {
	collectionId = req.params.collectionId

	const filterArray = req.query.filter

	httpsGetRequest(`https://${req.shopifyKey}:${req.shopifyPassword}@${req.shopifyStore}/admin/products.json?collection_id=${collectionId}&limit=250`, (shopifyRes) => {
		const jsonResponse = JSON.parse(shopifyRes).products
		if (filterArray) {
			const filteredProducts = jsonResponse.map(product => {
				let newObj = {}
				filterArray.forEach(key => newObj[key] = product[key])
				return newObj
			})
			res.send(filteredProducts)
		} else {
			res.send(jsonResponse)
		}
	});
});

module.exports = collectionsRouter;
