import React from "react";
import { CardImage, CardButton } from "../../components/Card/Card";
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
