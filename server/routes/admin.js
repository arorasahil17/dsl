const express = require("express");
const router = express.Router();
const {
  registerAdmin,
  loginAdmin,
  checkAdminAuth,
} = require("../controller/admin");

router
  .post("/admin/register", registerAdmin)
  .post("/admin/login", loginAdmin)
  .post("/admin/auth", checkAdminAuth);

module.exports = router;
