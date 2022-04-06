import { React, useReducer, useState, useEffect } from "react";
import "./products.css";

import { SideBar } from "./SideBar";
import { DisplaySection } from "./DisplaySection";
import Header from "../../components/Header/Header";

function Products() {
  return (
    <div>
      <Header />
      <div className="flex-row product-page-main">
        <SideBar />
        <DisplaySection />
      </div>
    </div>
  );
}

export default Products;
