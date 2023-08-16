require("dotenv").config();
const nodemailer = require("nodemailer");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//? Nodemailer configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

const registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      contactNumber,
      userType,
    } = req.body;

    //* check if user already exists or not
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email!",
      });
    }

    //TODO check if password and confirm password are same
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Password do not match" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const otp = generateOTP();
    const otpExpiration = new Date(Date.now() + 10 * 60 * 1000); //! 10 minutes from now
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
      contactNumber,
      userType,
      verificationOTP: otp,
      verificationOTPExpiresAt: otpExpiration,
    });

    const token = jwt.sign({ userId: newUser._id }, process.env.SECRET_KEY);
    newUser.token = token;
    await newUser.save();
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: "OTP Verification",
      text: `Your OTP for registration is: ${otp}`,
      html: `<p>Your OTP for registration is: <strong>${otp}</strong></p>`,
    };
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message:
        "User registered successfully. Please verify your account using OTP.",
      user: newUser,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found. Please register first.",
      });
    }
    //? Check if OTP and expiration time match
    if (
      user.isVerified ||
      user.verificationOTP !== otp ||
      user.verificationOTPExpiresAt < Date.now()
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid OTP or OTP has expired." });
    }
    //* Mark user as verified and clear OTP fields
    user.isVerified = true;
    user.verificationOTP = undefined;
    user.verificationOTPExpiresAt = undefined;
    await user.save();

    res.json({
      success: true,
      message: "OTP verification successful. Account is now verified.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { emailLogin, passwordLogin } = req.body;
    const user = await User.findOne({ email: emailLogin });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found with this email. Please register first",
      });
    }
    const isPasswordMatch = await bcrypt.compare(passwordLogin, user.password);
    if (!isPasswordMatch) {
      //? If the passwords do not match, return an error
      return res
        .status(401)
        .json({ success: false, message: "Incorrect Password" });
    }
    //TODO Generate a new JWT token for the user
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
    user.token = token;
    await user.save();
    //* Return the user details and token in the response
    res.json({
      success: true,
      message: "Login successful.",
      user: user,
      token: token,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const { firstName, lastName, email, contactNumber } = req.body;
    const user = await User.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          firstName,
          lastName,
          email,
          contactNumber,
        },
      },
      { new: true, runValidators: true }
    );

    res.status(200).json({ message: "User updated successfully!", user: user });
    console.log(user);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again!" });
  }
};

const logout = async (req, res) => {
  try {
    //! Clear the user information from session on logout
    const token = req.header("Authorization");
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.userId);
    if (!user) {
      res.json({ success: false, message: "Invalid token" });
    }
    user.token = null;
    await user.save();
    res.json({ success: true, message: "Logout successful.", user: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const checkAuth = async (req, res) => {
  try {
    const token = req.header("Authorization");
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.json({ success: false, message: "Please login to website" });
    }
    res.json({ success: true, user: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `Please Login to the website` });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: "something went wrong", error: err.message });
  }
};

const sendMessage = async (req, res) => {
  try {
    const { name, email, contact, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: "sahilbhuddi232@gmail.com",
      subject: "New Contact Message",
      text: `
        Name: ${name}
        Email: ${email}
        Contact: ${contact}
        
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        success: false,
        error: "An error occurred while sending the message.",
      });
  }
};

module.exports = {
  registerUser,
  verifyOtp,
  logout,
  loginUser,
  checkAuth,
  updateProfile,
  getUsers,
  sendMessage,
};
