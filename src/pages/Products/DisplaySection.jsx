import axios from "axios";
import { React } from "react";
import ProductCard from "../../components/Card/ProductCard";
import { useProduct } from "../../context";

export function DisplaySection() {
  const { products } = useProduct();

  return (
    <div className="product-display-section">
      <div className="header flex-row">
        <h2 className="H3 font-bold">
          Showing All Products{" "}
          <p className="text-md">{`(Showing ${products.length} products) `}</p>
        </h2>
        <div className="filter-icon">Filter</div>
      </div>

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
