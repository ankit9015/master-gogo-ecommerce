import axios from "axios";
import { React, useState } from "react";
import { Modal } from "../../components";
import ProductCard from "../../components/Card/ProductCard";
import { useProduct } from "../../context";
import { SideBar } from "./SideBar";

export function DisplaySection() {
  const { products } = useProduct();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="product-display-section">
      <div className="product-header flex-row">
        <h2 className="H3 font-bold">
          Showing All Products{" "}
          <p className="text-md">{`(Showing ${products.length} products) `}</p>
        </h2>
        <button
          className="filter-button button text-md"
          onClick={() => setShowModal((prev) => !prev)}
        >
          Filter
          {showModal && (
            <Modal>
              <div className="filter-modal">
                <SideBar />
              </div>
            </Modal>
          )}
        </button>
      </div>

      <div className="products-display-grid">
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
}
