import React from "react";
import { useState } from "react";
import CartCard from "../../components/Card/CartCard";
import { products } from "../../backend/db/products";

function Cart() {
  const [cartList, setCartList] = useState([]);
  return (
    <div>
      <h1 class="text-center text-xl font-extrabold line-height-lg">
        My Cart(1)
      </h1>
      <div class="cart-main flex-row">
        <div class=" flex-column product-card-list">
          {products.map((product) => (
            <li>
              <CartCard product={product} />
            </li>
          ))}
        </div>
        <div className="flex-column">
          <div class="product-bill card-vertical text-md">
            <div class="card-body">
              <h1 class="text-xl font-extrabold line-height-s">
                PRICE DETAILS
              </h1>
              <hr class="gray-line" />
              <div class="flex-row main-space-between">
                <h2>Price (2 items)</h2>
                <span class="text-lg">₹3999</span>
              </div>
              <div class="flex-row main-space-between">
                <h2>Discount</h2>
                <span class="text-lg">-₹1999</span>
              </div>
              <div class="flex-row main-space-between">
                <h2>Delivery Charges</h2>
                <span class="text-lg">₹499</span>
              </div>
              <hr class="gray-line" />
              <div class="flex-row main-space-between">
                <h2 class="font-extrabold">TOTAL AMOUNT</h2>
                <span class="text-lg">₹3499</span>
              </div>
              <hr class="gray-line" />
              <p>You will save ₹1999 on this order</p>
              <button class="button button-primary go-to-cart">
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
