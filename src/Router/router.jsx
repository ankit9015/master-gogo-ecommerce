import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Products,
  Wishlist,
  Cart,
  Login,
  MockAPI,
  Signup,
  PageNotFound,
  Address,
  SuccessPage,
} from "../pages";
import PrivateRoute from "./PrivateRoute";

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
      <Route
        path="address"
        element={
          <PrivateRoute>
            <Address />
          </PrivateRoute>
        }
      />
      <Route path="mockapi" element={<MockAPI />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
