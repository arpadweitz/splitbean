const Categories = require('../schema/categories');

const category_display = async (req, res) => {
    try {
        const categories = await Categories.find({});
        res.send({ ok: true, data: categories });
    
    } catch (error) {
        console.log(error);
    }
};


module.exports = { category_display };


