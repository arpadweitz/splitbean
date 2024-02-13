const express = require('express')
const router = express.Router()
const controller = require('../controllers/categories')

router.get('/categories', controller.category_display);  // controller); 



// router.post('/delete', controller.category_delete);
// router.post('/update', controller.category_update);
// router.post('/add', controller.category_add);

module.exports = router;