import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CardButton } from "../../components/Card/Card";
import CartCard from "../../components/Card/CartCard";
import Header from "../../components/Header/Header";
import "./Cart.css";
import { useCart } from "../../context/CartContext/CartContext";

function Cart() {
  const { cartState, cartDispatch } = useCart();
  const navigate = useNavigate();

  let deliveryCharges = cartState.itemTotal ? 499 : 0;

  useEffect(() => {
    document.title = "Cart";
  }, []);

  return (
    <div>
      <Header />
      {cartState.itemTotal === 0 ? (
        <div className="cart-main flex-row flex-center fluid-img p-l">
          <img src="empty-cart.png" alt="empty-cart" />
        </div>
      ) : (
        <div className="cart-main ">
          <h1 className="text-center text-xl font-extrabold line-height-lg">
            My Cart({cartState.itemTotal})
          </h1>
          <div className="cart-wrapper flex-row">
            <div className=" flex-column cart-card-list ">
              {cartState.cartItems.map((product) => (
                <CartCard key={product._id} product={product} />
              ))}
            </div>

            <div className="cart-bill flex-column m-m card-vertical text-md">
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
                  variant="button-primary card-button place-order"
                  onClick={() => {
                    cartDispatch({ type: "EMPTY-CART" });
                    navigate("../success");
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
      )}
    </div>
  );
}

export default Cart;
