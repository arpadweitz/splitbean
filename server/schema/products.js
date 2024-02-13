const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true, unique: false },
//   category_id: {
//     type:Schema.Types.ObjectId,
//     required: true,
//     ref:"category",
  });

module.exports = mongoose.model("product", productSchema);

// Every product will have name, price, color, description and ID of category from categories collection.