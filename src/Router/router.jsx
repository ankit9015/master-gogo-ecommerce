import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Homepage";
import Products from "../pages/Products/Products";
import Wishlist from "../pages/Wishlist/Wishlist";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Auth/Login/Login";
import MockAPI from "../pages/mockman/mockapi";
import Signup from "../pages/Auth/Signup/Signup";
import PageNotFound from "../pages/page-not-found/PageNotFound";
import PrivateRoute from "./PrivateRoute";
import SuccessPage from "../pages/SuccessPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route
        path="wishlist"
        element={
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        }
      />
      <Route
        path="cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route
        path="success"
        element={
          <PrivateRoute>
            <SuccessPage />
          </PrivateRoute>
        }
      />
      <Route path="mockapi" element={<MockAPI />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
