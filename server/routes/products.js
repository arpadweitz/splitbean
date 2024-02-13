const express = require('express')
const router = express.Router()
const controller = require('../controllers/products')

router.post('/add', controller.product_add);


// router.get('/categories', controller.category_display);  // controller); 
// router.post('/delete', controller.category_delete);
// router.get('/:product', controller.product_product);

module.exports = router;
