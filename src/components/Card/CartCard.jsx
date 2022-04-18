import { React, useState } from "react";
import { useCart } from "../../context/CartContext/CartContext";
import { useWishlist } from "../../context/WishlistContext/WishlistContext";
import { CardImage, CardButton } from "./Card";
import { FaStar } from "react-icons/fa";
import "./card.css";

const CartCard = (props) => {
  const [itemCount, setItemCount] = useState(1);
  const { cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();

  return (
    <div className="cart-card card-horizontal m-m">
      <CardImage src={props.product.img} alt={props.product.name} />
      <div className="card-body">
        <h1 className="card-title">{props.product.name}</h1>

        <div className="card-description">
          <div className="text-md">
            {`Ratings: ${props.product.ratings} / 5`}
            <FaStar className="rating-star fas fa-star" />
          </div>
          <div className="display-block">
            <span className="price-new text-lg font-extrabold">
              {`Price: ₹${props.product.discountedPrice}`}
            </span>{" "}
            <span className="text-lg font-light price-old font-light text-gray">{`₹${props.product.price}`}</span>
          </div>
          <div className="text-md">{`${props.product.discount}- off`}</div>
        </div>

        <div className="item-counter text-md">
          <span>Item count: </span>
          <button
            className="small-button button counter-button button-outline-secondary"
            onClick={() => {
              setItemCount((prev) => (prev > 0 ? prev - 1 : 0));

              cartDispatch({
                type: "DECREMENT",
                payload: {
                  product: props.product,
                },
              });
            }}
          >
            -
          </button>
          <input type="number" value={itemCount} readOnly />

          <button
            className="small-button button counter-button button-outline-secondary"
            onClick={() => {
              setItemCount((prev) => prev + 1);
              cartDispatch({
                type: "INCREMENT",
                payload: {
                  product: props.product,
                },
              });
            }}
          >
            +
          </button>
        </div>
        <CardButton
          variant="button-secondary product-card-button place-order"
          onClick={() => {
            cartDispatch({
              type: "REMOVE-ITEM",
              payload: {
                product: props.product,
              },
            });

            wishlistDispatch({
              type: "ADD-ITEM",
              payload: { product: props.product },
            });
          }}
          info={
            <>
              <span className="m-s text-md">Move to Wishlist</span>
            </>
          }
        />
        <CardButton
          variant="button-outline-secondary product-card-button remove-from-cart"
          onClick={() => {
            cartDispatch({
              type: "REMOVE-ITEM",
              payload: {
                product: props.product,
              },
            });
          }}
          info={
            <>
              <i className="fas fa-trash-alt" aria-hidden="true"></i>
              <span className="m-s text-md">Remove from Cart</span>
            </>
          }
        />
      </div>
    </div>
  );
};

export default CartCard;
