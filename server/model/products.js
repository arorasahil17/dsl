const mongoose = require("mongoose");

const productSchmea = new mongoose.Schema({
  name: { type: String, required: true },
  features: { type: Array, required: true },
  price: { type: Number, required: true },
});

const Products = new mongoose.model("Product", productSchmea);

module.exports = Products;
