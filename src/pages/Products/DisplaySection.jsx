import axios from "axios";
import { React, useEffect } from "react";

import ProductCard from "../../components/Card/ProductCard";
import { useProductContext } from "../../context/ProductContext/ProductContext";

export function DisplaySection() {
  const { products } = useProductContext();

  return (
    <div className="product-display-section">
      <h2 className="H2 font-bold line-height-lg">
        Showing All Products{" "}
        <span className="text-md m-s">{`(Showing ${products.length} products) `}</span>
      </h2>

      <div className="product-display-area">
        {products &&
          products.map((product) => (
            <div key={product._id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
}
