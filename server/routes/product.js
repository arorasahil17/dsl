const express = require("express");
const router = express.Router();
const { addProduct, getProduct } = require("../controller/product");

router.post("/add/product", addProduct).get("/get/products", getProduct);

module.exports = router;
