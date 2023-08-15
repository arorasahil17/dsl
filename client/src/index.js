import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import Home from "./pages/home";
import About from "./pages/about";
import LoginPage from "./pages/loginPage";
import { adminReducer, productReducer, userReducer } from "./reducers";
import { Provider } from "react-redux";
import OtpPage from "./pages/otpPage";
import PaymentPage from "./pages/paymentPage";
import SuccessPage from "./pages/successPage";
import ProfilePage from "./pages/proflePage";
import Layout from "./components/admin/home/adminLayout";
import AdminMain from "./components/admin/home/home";
import AllProducts from "./components/admin/products/allProducts";
import AddProduct from "./components/admin/products/addProduct";
import AdminLogin from "./components/admin/login";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    admin: adminReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="otp" element={<OtpPage />} />
            <Route path="products" element={<PaymentPage />} />
            <Route path="success" element={<SuccessPage />} />
            <Route path="my/account" element={<ProfilePage />} />
          </Route>
          <Route path="admin" element={<Layout />}>
            <Route index element={<AdminMain />} />
            <Route path="all/products" element={<AllProducts />} />
            <Route path="add/product" element={<AddProduct />} />
            <Route path="login" element={<AdminLogin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
