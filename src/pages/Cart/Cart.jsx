import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CardButton } from "../../components/Card/Card";
import CartCard from "../../components/Card/CartCard";
import Header from "../../components/Header/Header";
import "./Cart.css";
import { useCart } from "../../context/CartContext/CartContext";
import { useAuth, useToast } from "../../context";
import AddressCard from "../Address/AddressCard";
import usePayment from "../../hooks/usePayment";

function Cart() {
  const { cartState, cartDispatch } = useCart();
  const { addToast } = useToast();
  const {
    authState: { user },
  } = useAuth();
  const navigate = useNavigate();

  let deliveryCharges = cartState.itemTotal ? 499 : 0;

  const redirect = () => {
    cartDispatch({ type: "EMPTY-CART" });
    addToast({
      content: "Transaction successful",
      type: "SUCCESS",
    });
    navigate("/success");
  };

  const showRazorPay = usePayment(
    Number(cartState.discountedPriceTotal) + Number(deliveryCharges),
    user,
    redirect
  );

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
          <section className="cart-address">
            <div className="flex-row flex-wrap">
              <p className="text-lg">Delivery Address: </p>
              <button
                className="change-address button button-outline-secondary text-md"
                onClick={() => navigate("/address")}
              >
                Change Address
              </button>
            </div>
            {cartState.address ? (
              <AddressCard address={cartState.address} />
            ) : (
              <p className="text-md text-red">
                Add your delivery address to place order
              </p>
            )}
          </section>
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
                  <span className="text-lg">{`-₹${
                    cartState.priceTotal - cartState.discountedPriceTotal
                  }`}</span>
                </div>
                <div className="flex-row main-space-between">
                  <h2>Delivery Charges</h2>
                  <span className="text-lg">{`+₹${deliveryCharges}`}</span>
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
                    if (!cartState.address) {
                      addToast({
                        content: "Add delivery address to place order",
                        type: "INFO",
                      });
                      return;
                    }
                    showRazorPay();
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
