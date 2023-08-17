import axios from "axios";
// axios.defaults.baseURL = "http://localhost:9000";
axios.defaults.baseURL = "https://data-shields-lab.onrender.com";

// Action types
export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
export const UPDATE_REQUEST = "UPDATE_REQUEST";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAILURE = "UPDATE_FAILURE";
export const VERIFY_OTP_REQUEST = "VERIFY_OTP_REQUEST";
export const VERIFY_OTP_SUCCESS = "VERIFY_OTP_SUCCESS";
export const VERIFY_OTP_FAILURE = "VERIFY_OTP_FAILURE";
export const FETCHING_PRODUCT_REQUEST = "FETCHING_PRODUCT_REQUEST";
export const FETCHING_PRODUCT_SUCCESS = "FETCHING_PRODUCT_SUCCESS";
export const FETCHING_PRODUCT_FAILURE = "FETCHING_PRODUCT_FAILURE";
export const PAYMENT_REQUEST = "PAYMENT_REQUEST";
export const PAYMENT_SUCCESS = "PAYMENT_SUCCESS";
export const PAYMENT_FAILURE = "PAYMENT_FAILURE";
export const ADD_PRODUCT_REQUEST = "ADD_PRODUCT_REQUEST";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";
export const ADMIN_LOGIN_REQUEST = "ADMIN_LOGIN_REQUEST";
export const ADMIN_LOGIN_SUCCESS = "ADMIN_LOGIN_SUCCESS";
export const ADMIN_LOGIN_FAILURE = "ADMIN_LOGIN_FAILURE";
export const ADMIN_AUTH_REQUEST = "ADMIN_AUTH_REQUEST";
export const ADMIN_AUTH_SUCCESS = "ADMIN_AUTH_SUCCESS";
export const ADMIN_AUTH_FAILURE = "ADMIN_AUTH_FAILURE";
export const SEND_MESSAGE_REQUEST = "SEND_MESSAGE_REQUEST";
export const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS";
export const SEND_MESSAGE_FAILURE = "SEND_MESSAGE_FAILURE";

//* Action creators

export const authRequest = () => ({ type: AUTH_REQUEST });

export const authSuccess = (userData) => ({
  type: AUTH_SUCCESS,
  payload: userData,
});

export const authFailure = (error) => ({ type: AUTH_FAILURE, payload: error });

export const authenticateUser = (navigate) => async (dispatch) => {
  dispatch(authRequest());
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const response = await axios.post("/auth", null, config);
    if (response.data.success) {
      dispatch(authSuccess(response.data.user));
    }
  } catch (err) {
    // dispatch(authFailure(err.response.data.message));
    console.log(err);
  }
};

export const registerRequest = () => ({ type: REGISTER_REQUEST });

export const registerSuccess = (userData) => ({
  type: REGISTER_SUCCESS,
  payload: userData,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const registerUser = (userData, navigate) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post("/register", userData);
    const user = response.data.user;
    dispatch(registerSuccess(user));
    const token = response.data.user.token;
    localStorage.setItem("token", token);

    navigate("/otp");
  } catch (error) {
    console.log(error.response.data.message);
    dispatch(registerFailure(error.response.data.message));
  }
};

export const loginRequest = () => ({ type: LOGIN_REQUEST });

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginUser = (userData, navigate) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post("/login", userData);
    const user = response.data.user;
    dispatch(loginSuccess(user));
    const token = response.data.user.token;

    localStorage.setItem("token", token);
    navigate("/");
  } catch (error) {
    console.log(error);
    const errorMessage = error.response.data.message;
    dispatch(loginFailure(errorMessage));
  }
};

export const logoutUser = (navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token,
      },
    };
    await axios.post("/logout", null, config);
    dispatch({ type: LOGOUT_SUCCESS });
    localStorage.clear();
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOGOUT_FAILURE", payload: error.message });
  }
};

export const verifyOtpRequest = () => ({ type: VERIFY_OTP_REQUEST });

export const verifyOtpSuccess = () => ({
  type: VERIFY_OTP_SUCCESS,
});

export const verifyOtpFailure = (error) => ({
  type: VERIFY_OTP_FAILURE,
  payload: error,
});

export const verifyOtp = (otp, navigate) => async (dispatch) => {
  dispatch(verifyOtpRequest());
  try {
    const response = await axios.post("/verify/otp", otp);

    if (response.data.success) {
      navigate("/");
      dispatch(verifyOtpSuccess());
    } else {
      console.log(response.data.message);
      dispatch(verifyOtpFailure(response.data.message));
    }
  } catch (error) {
    console.log(error);
    dispatch(verifyOtpFailure(error.message));
  }
};

export const updateRequest = () => ({ type: UPDATE_REQUEST });

export const updateSuccess = (updatedUser, message) => ({
  type: UPDATE_SUCCESS,
  payload: { updatedUser, message },
});

export const updatedFailure = (error) => ({
  type: UPDATE_FAILURE,
  payload: error,
});

export const updateUser = (userData, id) => async (dispatch) => {
  try {
    const response = await axios.put(`/update/profile/${id}`, userData);
    console.log(response);
    if (response.data.success) {
      const updatedUser = response.data.user;
      const message = response.data.message;
      dispatch(updateSuccess(updatedUser, message));
    }
  } catch (err) {
    console.log(err);
    const error = err.message;
    dispatch(updatedFailure(error));
  }
};

export const fetchingProductsRequest = () => ({
  type: FETCHING_PRODUCT_REQUEST,
});

export const fetchingProductsSuccess = (products) => ({
  type: FETCHING_PRODUCT_SUCCESS,
  payload: products,
});

export const fetchingProductsFailure = (error) => {
  return { type: FETCHING_PRODUCT_FAILURE, payload: error };
};

export const fetchingProducts = () => async (dispatch) => {
  dispatch(fetchingProductsRequest());
  try {
    const response = await axios.get("/get/products");
    const product = response.data;
    dispatch(fetchingProductsSuccess(product));
  } catch (err) {
    dispatch(fetchingProductsFailure(err));
  }
};

export const paymentRequest = () => ({ type: PAYMENT_REQUEST });

export const paymentInitiateSuccess = (paymentURL) => ({
  type: PAYMENT_SUCCESS,
  payload: paymentURL,
});

export const paymentInitiateFailure = (error) => ({
  type: PAYMENT_FAILURE,
  payload: error,
});

export const paymentInitiate = (product, id, navigate) => async (dispatch) => {
  dispatch(paymentRequest());
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const response = await axios.post(`/create-payment/${id}`, product, config);
    if (response) {
      const { url } = response.data;
      dispatch(paymentInitiateSuccess(url));
      window.location = url;
    } else {
      navigate("/login");
    }
  } catch (error) {
    // Handle errors, including the case when the user is not authenticated
    if (error.response && error.response.status === 401) {
      navigate("/login");
    } else {
      console.log(error);
      dispatch(paymentInitiateFailure(error));
    }
  }
};

export const addProductRequest = () => ({ type: ADD_PRODUCT_REQUEST });

export const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

export const addProductFailure = (error) => ({
  type: ADD_PRODUCT_FAILURE,
  payload: error,
});

export const addProduct = (productData) => async (dispatch) => {
  dispatch(addProductRequest());
  try {
    const response = await axios.post("/add/product", productData);
    console.log(response);
    if (response.data.success) {
      const data = response.data;
      dispatch(addProductSuccess(data));
    }
  } catch (err) {
    console.log(err);
    dispatch(addProductFailure(err.message));
  }
};

export const adminLoginRequest = () => ({ type: ADMIN_LOGIN_REQUEST });

export const adminLoginSuccess = (adminDetails) => ({
  type: ADMIN_LOGIN_SUCCESS,
  payload: adminDetails,
});

export const adminLoginFailure = (error) => ({
  type: ADD_PRODUCT_FAILURE,
  payload: error,
});

export const adminLogin = (adminData, navigate) => async (dispatch) => {
  dispatch(addProductRequest());
  try {
    const response = await axios.post("/admin/login", adminData);
    if (response.data.success) {
      const token = response.data.admin.token;
      localStorage.setItem("adminToken", token);
      dispatch(adminLoginSuccess(adminData));
      navigate("/admin");
    }
  } catch (err) {
    console.log(err);
    dispatch(adminLoginFailure(err.message));
  }
};

export const adminAuthRequest = () => ({ type: ADMIN_AUTH_REQUEST });

export const adminAuthSuccess = (adminDetails) => ({
  type: ADMIN_AUTH_SUCCESS,
  payload: adminDetails,
});

export const adminAuthFailure = (error) => ({
  type: ADMIN_AUTH_FAILURE,
  payload: error,
});

export const adminAuth = (navigate) => async (dispatch) => {
  let token = localStorage.getItem("adminToken");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const response = await axios.post("/admin/auth", null, config);
    if (response.data.success) {
      dispatch(adminAuthSuccess(response.data.admin));
      navigate("/admin");
    } else {
      navigate("/admin/login");
    }
  } catch (err) {
    console.log(err);
    dispatch(adminAuthFailure(err.message));
  }
};

export const sendMessageRequest = () => ({ type: SEND_MESSAGE_REQUEST });

export const sendMessageSuccess = () => ({ type: SEND_MESSAGE_SUCCESS });

export const sendMessageFailure = (error) => ({
  type: SEND_MESSAGE_FAILURE,
  payload: error,
});

export const sendMessage = (messageData) => async (dispatch) => {
  dispatch(sendMessageRequest());
  try {
    const response = await axios.post("/send/messsage", messageData);
    if (response.data.success) {
      dispatch(sendMessageSuccess());
    }
  } catch (err) {
    console.log(err);
    dispatch(sendMessageFailure(err.message));
  }
};
