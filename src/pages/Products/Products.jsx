import { React, useEffect } from "react";
import "./products.css";

import { SideBar } from "./SideBar";
import { DisplaySection } from "./DisplaySection";
import Header from "../../components/Header/Header";

function Products() {
  useEffect(() => {
    document.title = "Explore";
  }, []);

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
