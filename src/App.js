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
            <div className="page-layout">
              <Header></Header>
              <div className="page-layout__main m-l">
                <Router />
              </div>
              <Footer></Footer>
            </div>
          </ProductProvider>
        </WishlistProvider>
      </CartProvider>
    </div>
  );
}

export default App;
