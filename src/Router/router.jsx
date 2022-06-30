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

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="explore" element={<Products />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mockapi" element={<MockAPI />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
