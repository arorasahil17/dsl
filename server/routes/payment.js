const express = require("express");
const router = express.Router();
const { createPayment } = require("../controller/payment");
const authMiddleware = require("../middleware/auth");

router.post("/create-payment/:id", authMiddleware, createPayment);
module.exports = router;
