const Product = require("../model/products");

const addProduct = async (req, res) => {
  try {
    const { name, price, features } = req.body;
    const newProduct = new Product({
      name,
      price,
      features,
    });
    await newProduct.save();
    res
      .status(201)
      .json({
        success: true,
        message: "product added successfully",
        product: newProduct,
      });
  } catch (err) {
    res.json({ message: "error in adding the product:", err: err.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products);
    res.status(200).json(products);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
};

module.exports = { addProduct, getProduct };
