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

      <div className="product-card-container">
        {products &&
          products.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              discount={product.discount}
              discountedPrice={product.discountedPrice}
              price={product.price}
              ratings={product.ratings}
              img={{ src: product.img, alt: product.name }}
            />
          ))}
      </div>
    </div>
  );
}
