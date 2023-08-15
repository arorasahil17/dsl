const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required."],
    // match: [/^[A-Za-z]+$/, "First Name accepts alphabets only"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required."],
    // match: [/^[A-Za-z]+$/, "First Name accepts alphabets only"],
  },
  email: {
    type: String,
    required: [true, "Email address is required."],
    unique: true,
    validate: {
      validator: function (v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address.`,
    },
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minlength: [6, "Password must be at least 6 characters long."],
  },
  confirmPassword: {
    type: String,
    required: [true, "Confirm password is required."],
    validate: {
      validator: function (v) {
        return this.password === v;
      },
      message: "Passwords do not match.",
    },
  },
  contactNumber: {
    type: String,
    required: [true, "Contact number is required."],
    validate: {
      validator: function (v) {
        // Allow phone numbers with or without the leading +
        // and enforce the country code to be +91
        return /^\+91\d{10}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid contact number.`,
    },
  },
  userType: {
    type: String,
    enum: ["student", "professional", "other"],
    required: [true, "User type is required."],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationOTP: {
    type: String,
  },
  verificationOTPExpiresAt: {
    type: Date,
  },
  isPaymentMade: {
    type: Boolean,
    default: false,
  },
  paymentDate: {
    type: Date,
  },
  paymentAmount: {
    type: Number,
  },
  token: { type: String, default: null },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
