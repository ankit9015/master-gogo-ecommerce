


import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Homepage";
import Products from "../pages/Products/Products";
import Wishlist from "../pages/Wishlist/Wishlist";
import Cart from "../pages/Cart/Cart";
import Auth from "../pages/Auth/Auth";

const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/auth" element={<Auth/>}/>
    </Routes>
  );
};

export default Router;