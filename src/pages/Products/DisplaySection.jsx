import axios from "axios";
import { React, } from "react";
import ProductCard from "../../components/Card/ProductCard";
import { useProduct } from "../../context";


export function DisplaySection() {
  const { products } = useProduct();

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
