require("dotenv").config();
const Admin = require("../model/admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const admin = new Admin({ username, password: hashedPassword });
    const token = jwt.sign({ adminId: admin._id }, process.env.SECRET_KEY);
    admin.token = token;
    await admin.save();
    res
      .status(201)
      .json({ success: true, message: "Admin Saved", data: admin });
  } catch (err) {
    res.json({ message: "An error occured", error: err.message });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) {
      res.status(400).json({ success: false, message: "Admin Not Found" });
    }
    const isPasswordMatch = await bcrypt.compare(password, admin.password);
    if (!isPasswordMatch) {
      //? If the passwords do not match, return an error
      return res
        .status(401)
        .json({ success: false, message: "Incorrect Password" });
    }
    const token = jwt.sign({ adminId: admin._id }, process.env.SECRET_KEY);
    admin.token = token;
    await admin.save();
    //* Return the admin details and token in the response
    res.json({
      success: true,
      message: "Login successful.",
      admin: admin,
      token: token,
    });
  } catch (err) {
    res.json(err);
  }
};

const checkAdminAuth = async (req, res) => {
  try {
    const token = req.header("Authorization");
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const admin = await Admin.findById(decoded.adminId);
    res.json({ success: true, admin: admin });
  } catch (err) {
    res.json(err);
  }
};
module.exports = { registerAdmin, loginAdmin, checkAdminAuth };
