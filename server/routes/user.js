const express = require("express");
const router = express.Router();
const {
  registerUser,
  verifyOtp,
  logout,
  loginUser,
  checkAuth,
  updateProfile,
  sendMessage,
} = require("../controller/user");

router
  .post("/register", registerUser)
  .post("/login", loginUser)
  .post("/auth", checkAuth)
  .put("/update/profile/:id", updateProfile)
  .post("/verify/otp", verifyOtp)
  .post("/logout", logout)
  .post("/send/messsage", sendMessage);

module.exports = router;
