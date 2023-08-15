import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../../actions";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
const Login = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [userType, setUserType] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [errors, setErrors] = useState({});
  const [loginErrors, setLoginErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const clientError = user?.error;
  useEffect(() => {
    toast.error(clientError);
  }, [clientError]);
  const handleRegister = async (e) => {
    e.preventDefault();
    const errors = {};
    console.log("Hello");

    try {
      const formContactNumber = `+91${contactNumber}`;
      const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        userType: userType,
        contactNumber: formContactNumber,
      };
      if (!formData.firstName) {
        errors.firstName = "First name is required.";
        console.log(errors);
      }
      if (!formData.lastName) {
        errors.lastName = "Last name is required.";
      }
      if (!formData.email) {
        errors.email = "Email address is required.";
      } else if (!/^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(formData.email)) {
        errors.email = "Invalid email address.";
      }

      if (!formData.password) {
        errors.password = "Password is required.";
      } else if (formData.password.length < 6) {
        errors.password = "Password must be at least 6 characters long.";
      }

      if (!formData.confirmPassword) {
        errors.confirmPassword = "Confirm password is required.";
      } else if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match.";
      }

      if (!formData.contactNumber) {
        errors.contactNumber = "Contact number is required.";
      } else if (!/^\+91\d{10}$/.test(formData.contactNumber)) {
        errors.contactNumber = "Invalid contact number.";
      }
      if (!formData.userType) {
        errors.userType = "User type is required.";
      } else if (
        !["student", "professional", "other"].includes(formData.userType)
      ) {
        errors.userType = "Invalid user type.";
      }

      setErrors(errors);

      //* If there are any errors, return early and do not dispatch the action
      if (Object.keys(errors).length > 0) {
        return;
      }

      dispatch(registerUser(formData, navigate));
    } catch (err) {
      console.log(err.errors);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = {
      emailLogin,
      passwordLogin,
    };
    const loginerrors = {};
    if (!formData.emailLogin) {
      loginerrors.email = "Email address is required.";
    } else if (
      !/^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(formData.emailLogin)
    ) {
      loginerrors.email = "Invalid email address.";
    }
    if (!formData.passwordLogin) {
      loginerrors.password = "Password is required.";
    } else if (formData.passwordLogin.length < 6) {
      loginerrors.password = "Password must be at least 6 characters long.";
    }

    setLoginErrors(loginerrors);
    //todo: If there are any errors, return early and do not dispatch the action
    if (Object.keys(loginerrors).length > 0) {
      return;
    }

    dispatch(loginUser(formData, navigate));
  };

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
      <div className="container my-5 form-container">
        <div className="row justify-content-center" style={{ gap: 100 }}>
          {loggedIn ? (
            <div className="col-md-4 form-col">
              <h4 className="fw-bold form-head">Login</h4>
              <p className="global-text" style={{ fontSize: 15 }}>
                If you have an account with us, please login
              </p>
              <form action="" onSubmit={handleLogin}>
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  value={emailLogin}
                  className="input"
                  onChange={(e) => setEmailLogin(e.target.value)}
                />
                {loginErrors.email ? (
                  <div className="error-message">{loginErrors.email}</div>
                ) : null}
                <label htmlFor="" className="mt-3">
                  Password
                </label>
                <input
                  type="text"
                  value={passwordLogin}
                  className="input"
                  onChange={(e) => setPasswordLogin(e.target.value)}
                />
                {loginErrors.password && (
                  <div className="error-message">{loginErrors.password}</div>
                )}
                <div className="d-flex justify-content-between">
                  <div>
                    <button className="form-btn">Login</button>
                  </div>
                  <div className="mt-4">
                    <a href="." className="forgot-password">
                      Forgot Password?
                    </a>
                  </div>
                </div>
              </form>
              <button
                className="btn register mt-3"
                onClick={() => setLoggedIn(false)}
              >
                Register New Account
              </button>
            </div>
          ) : (
            <div className="col-md-5 register-form">
              <h4 className="fw-bold form-head">Register</h4>
              <p className="global-text" style={{ fontSize: 15 }}>
                If you don't have an account, please register
              </p>
              <form action="" onSubmit={(e) => handleRegister(e)}>
                <div className="d-flex gap-5 form-div">
                  <div>
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="input"
                    />
                    {errors.firstName ? (
                      <div className="error-message">{errors.firstName}</div>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="" className="">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="input"
                    />
                    {errors.lastName && (
                      <div className="error-message">{errors.lastName}</div>
                    )}
                  </div>
                </div>
                <div className="d-flex gap-5 form-div">
                  <div>
                    <label htmlFor="">Email</label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input"
                    />
                    {errors.email && (
                      <div className="error-message">{errors.email}</div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="">Contact Number</label>
                    <input
                      type="number"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      className="input"
                    />
                    {errors.contactNumber && (
                      <div className="error-message">
                        {errors.contactNumber}
                      </div>
                    )}
                  </div>
                </div>
                <div className="d-flex gap-5 form-div">
                  <div>
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input"
                    />
                    {errors.password && (
                      <div className="error-message">{errors.password}</div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="">Confirm-Password</label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="input"
                    />
                    {errors.confirmPassword && (
                      <div className="error-message">
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                </div>
                <label className="mt-3">I am a?</label>
                <select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="input"
                >
                  <option value="">select</option>
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                  <option value="other">Other</option>
                </select>
                {errors.userType && (
                  <div className="error-message">{errors.userType}</div>
                )}
                <div className="d-flex justify-content-between ">
                  <div>
                    <button type="submit" className="form-btn">
                      Sign up
                    </button>
                  </div>
                  {/* <div className="mt-4">
                    <a href="." className="forgot-password">
                      Forgot Password?
                    </a>
                  </div> */}
                </div>
              </form>
              <button
                className="register btn mt-3"
                onClick={() => setLoggedIn(true)}
              >
                Login with an existing account
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Login;
