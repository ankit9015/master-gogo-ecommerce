import { React, useReducer, useState, useEffect } from "react";
import "./products.css";

import { SideBar } from "./SideBar";
import { DisplaySection } from "./DisplaySection";
import { ProductProvider } from "../../context/product-context/ProductContext/ProductContext";

function Products() {
  return (
    <ProductProvider>
      <div className="flex-row product-page-main">
        <SideBar />
        <DisplaySection />
      </div>
    </ProductProvider>
  );
}

export default Products;
