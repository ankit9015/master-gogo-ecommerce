import { React, useReducer, useState, useEffect } from "react";
import "./products.css";

import { SideBar } from "./SideBar";
import { DisplaySection } from "./DisplaySection";

function Products() {
  return (
    <div className="flex-row product-page-main">
      <SideBar />
      <DisplaySection />
    </div>
  );
}

export default Products;
