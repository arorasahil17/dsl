const validationRules = {
  firstName: {
    required: true,
    errorMessage: "First name is required.",
  },
  lastName: {
    required: true,
    errorMessage: "Last name is required.",
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Please enter a valid email address.",
  },
  password: {
    required: true,
    minLength: 6,
    errorMessage: "Password must be at least 6 characters long.",
  },
  confirmPassword: {
    required: true,
    errorMessage: "Please confirm your password.",
  },
  contactNumber: {
    required: true,
    pattern: /^[0-9]+$/,
    errorMessage: "Please enter a valid contact number.",
  },
  userType: {
    required: true,
    errorMessage: "Please select a user type.",
  },
  emailLogin: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Please enter a valid email address.",
  },
  passwordLogin: {
    required: true,
    errorMessage: "Please enter your password.",
  },
};

export default validationRules;
