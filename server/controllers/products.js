const Products = require('../schema/products');
const Categories = require('../schema/categories');

const getProducts = async (req, res) => {
    try {
        const products = await Products.find(); // Fetch all products from the database
        res.send({ ok: true, data: products });
        // Send the products as JSON response
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getProducts };