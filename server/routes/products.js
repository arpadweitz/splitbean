const express = require('express');
const router = express.Router();
const controller = require('../controllers/products')

router.get('/products', controller.getProducts); // Route to fetch products
router.get('/products/:productName', controller.getSingleProduct); // Route to fetch SingleProduct


module.exports = router;

// const { getProducts } = require('./controllers/products');