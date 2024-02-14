const express = require('express');
const router = express.Router();
const controller = require('../controllers/products')

router.get('/products', controller.getProducts); // Route to fetch products

module.exports = router;

// const { getProducts } = require('./controllers/products');