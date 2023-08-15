// userReducer.js
import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAILURE,
  REGISTER_REQUEST,
  FETCHING_PRODUCT_REQUEST,
  FETCHING_PRODUCT_SUCCESS,
  FETCHING_PRODUCT_FAILURE,
  PAYMENT_REQUEST,
  PAYMENT_SUCCESS,
  PAYMENT_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  LOGIN_REQUEST,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAILURE,
  ADMIN_AUTH_REQUEST,
  ADMIN_AUTH_SUCCESS,
  ADMIN_AUTH_FAILURE,
} from "../actions/index";

const initialStateUser = {
  isLoading: false,
  user: null,
  success: "",
  error: null,
  isOtpVerified: false,
};

const initialStateProduct = {
  products: [],
  isLoading: false,
  error: null,
  success: null,
};

const initialStatePayment = {
  isLoading: false,
  paymentUrl: null,
  error: null,
};

const initialStateAdmin = {
  admin: null,
  isLoading: false,
  success: null,
  error: null,
};

const userReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case UPDATE_REQUEST:
      return { ...state, isLoading: true };
    case UPDATE_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        user: action.payload.updatedUser,
        success: action.payload.message,
      };
    case UPDATE_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case AUTH_REQUEST:
      return { ...state, error: null };
    case AUTH_SUCCESS:
      return { ...state, isLoading: false, error: null, user: action.payload };
    case AUTH_FAILURE:
      return { ...state, isLoading: false, error: action.payload, user: null };
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: null,
      };
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        isLoading: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: action.payload,
      };
    case VERIFY_OTP_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isOtpVerified: true,
        error: null,
      };
    case VERIFY_OTP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
        isLoading: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        error: null,
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const productReducer = (state = initialStateProduct, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return { ...state, isLoading: true, success: null };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        success: "Product Added Successfully!",
      };
    case ADD_PRODUCT_FAILURE:
      return { ...state, error: action.payload };
    case FETCHING_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case FETCHING_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: action.payload };
    case FETCHING_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const paymentReducer = (state = initialStatePayment, action) => {
  switch (action.type) {
    case PAYMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case PAYMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        paymentUrl: action.payload,
        error: null,
      };
    case PAYMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        paymentUrl: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

const adminReducer = (state = initialStateAdmin, action) => {
  switch (action.type) {
    case ADMIN_AUTH_REQUEST:
      return { ...state, isLoading: true };
    case ADMIN_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        admin: action.payload,
        success: "Admin Authenticated",
      };
    case ADMIN_AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "Authentication failed! Please Login.",
      };
    case ADMIN_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        admin: action.payload,
        success: "Login Successful",
      };
    case ADMIN_LOGIN_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export { userReducer, productReducer, paymentReducer, adminReducer };
