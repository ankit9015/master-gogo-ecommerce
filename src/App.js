import "./App.css";
import { useState } from "react";
import Router from "./Router/router";

import { ProductProvider } from "./context/ProductContext/ProductContext";
import { CartProvider } from "./context/CartContext/CartContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { WishlistProvider } from "./context/WishlistContext/WishlistContext";
import { AuthProvider } from "./context";

function App() {
  return (
    <div className="App">
      <AuthProvider >
      <CartProvider>
        <WishlistProvider>
          <ProductProvider>
            <Router />
          </ProductProvider>
        </WishlistProvider>
      </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
