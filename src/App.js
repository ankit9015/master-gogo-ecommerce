import "./App.css";
import { useState } from "react";
import Router from "./Router/router";

import { ProductProvider } from "./context/ProductContext/ProductContext";
import { CartProvider } from "./context/CartContext/CartContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { WishlistProvider } from "./context/WishlistContext/WishlistContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <WishlistProvider>
          <ProductProvider>
            <Router />
          </ProductProvider>
        </WishlistProvider>
      </CartProvider>
    </div>
  );
}

export default App;
