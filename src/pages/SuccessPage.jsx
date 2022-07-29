import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components";
import "./pages.css";

function SuccessPage() {
  const navigate = useNavigate();
  return (
    <div className="success-page">
      <Header />
      <section className="flex-column flex-center">
        <h3 className="text-lg text-center">Order Placed Successfully</h3>
        <button
          className="button button-primary text-md"
          onClick={() => navigate("../products")}
        >
          Continue Shopping
        </button>
      </section>
    </div>
  );
}

export default SuccessPage;
