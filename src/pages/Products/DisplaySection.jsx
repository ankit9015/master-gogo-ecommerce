import React from "react";
import { products } from "../../backend/db/products";
import ProductCard from "../../components/Card/ProductCard";

export function DisplaySection() {
  return (
    <div className="product-display-section">
      <h2 class="H2 font-bold line-height-lg">
        Showing All Products{" "}
        <span class="text-md m-s">(Showing 20 Products)</span>
      </h2>

      <div class="product-card-container">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
