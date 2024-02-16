const Products = require('../schema/products');
const Categories = require('../schema/categories');

const getProducts = async (req, res) => {
    try {
        const products = await Products.find(); // Fetch all products from the database
        // console.log()
        res.send({ ok: true, data: products });
    } catch (error) {
        console.log(error);
    }
};

const getSingleProduct = async (req, res) => {

    try {
        const productName = req.params.productName;
        // Query the database for the product with the specified name
        const product = await Products.findOne({ name: productName });
        if (!product) {
          // If product not found, return a 404 error response
          return ({ error: 'Product not found' });
        }
        // If product found, return it
        res.send({ ok: true, data: product });
      } catch (error) {
        console.log(error);
        // If an error occurs, return a 500 error response
        // console.error('Error fetching product:', error);
        // res.send({ error: 'Internal server error' });
      }
    };




module.exports = { getProducts, getSingleProduct };