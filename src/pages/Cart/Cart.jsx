import { React, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CardButton } from "../../components/Card/Card";
import CartCard from "../../components/Card/CartCard";
import Header from "../../components/Header/Header";
import { useAuth } from "../../context";

import { useCart } from "../../context/CartContext/CartContext";

function Cart() {
  const { cartState } = useCart();
  const { authState } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  let deliveryCharges = cartState.itemTotal ? 499 : 0;

  useEffect(() => {
    document.title = "Cart";
  }, []);

  return (
    <div>
      <Header />
      {cartState.itemTotal === 0 ? (
        <div className="flex-row flex-center fluid-img p-l">
          <img src="empty-cart.png" alt="empty-cart" />
        </div>
      ) : (
        <div>
          <h1 className="text-center text-xl font-extrabold line-height-lg">
            My Cart({cartState.itemTotal})
          </h1>
          <div className="cart-main flex-row">
            <div className=" flex-column cart-card-list m-m">
              {cartState.cartItems.map((product) => (
                <li key={product._id}>
                  <CartCard product={product} />
                </li>
              ))}
            </div>
            <div className="flex-column m-m">
              <div className="cart-bill card-vertical text-md">
                <div className="card-body">
                  <h1 className="text-lg font-extrabold line-height-s">
                    PRICE DETAILS
                  </h1>
                  <hr className="gray-line" />
                  <div className="flex-row main-space-between">
                    <span>{`Price (${cartState.itemTotal} items)`}</span>
                    <span className="text-lg">{`₹${cartState.priceTotal}`}</span>
                  </div>
                  <div className="flex-row main-space-between">
                    <h2>Discount</h2>
                    <span className="text-lg">{`₹${cartState.discountedPriceTotal}`}</span>
                  </div>
                  <div className="flex-row main-space-between">
                    <h2>Delivery Charges</h2>
                    <span className="text-lg">{`₹${deliveryCharges}`}</span>
                  </div>
                  <hr className="gray-line" />
                  <div className="flex-row main-space-between">
                    <h2 className="font-extrabold">TOTAL AMOUNT</h2>
                    <span className="text-lg">{`₹${
                      cartState.discountedPriceTotal + deliveryCharges
                    }`}</span>
                  </div>
                  <hr className="gray-line" />
                  <p>{`You will save ₹${cartState.discountedPriceTotal} on this order`}</p>

                  <CardButton
                    variant="button-primary product-card-button place-order"
                    onClick={() => {
                      authState?.authToken
                        ? alert("Order Placed")
                        : navigate("../login", {
                            state: { from: location },
                          });
                    }}
                    info={
                      <>
                        <span className="m-s text-md">Place Order</span>
                      </>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
