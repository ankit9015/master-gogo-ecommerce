import { useWishlist } from "../../context/WishlistContext/WishlistContext";
import { React, useState, useEffect } from "react";
import { CardImage, CardButton } from "./Card";
import "./card.css";
import { useCart } from "../../context/CartContext/CartContext";
import { FaHeart, FaStar } from "react-icons/fa";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { authState } = useAuth();
  const navigate = useNavigate();

  const { cartState, cartDispatch } = useCart();

  const [inCart, setInCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);

  const isInCart = () => {
    cartState.cartItems.find((item) => item.id === props.product.id)
      ? setInCart(true)
      : setInCart(false);
  };

  const isInWishlist = () => {
    wishlistState.wishlist.find((item) => item.id === props.product.id)
      ? setInWishlist(true)
      : setInWishlist(false);
  };

  useEffect(() => {
    isInCart();
    isInWishlist();
  });

  return (
    <div className="card-vertical product-card">
      <CardImage src={props.product.img} alt={props.product.name} />
      <div
        className="badge-wishlist flex-row button"
        onClick={() =>
          authState?.authToken
            ? inWishlist
              ? wishlistDispatch({
                  type: "REMOVE-ITEM",
                  payload: { product: props.product },
                })
              : wishlistDispatch({
                  type: "ADD-ITEM",
                  payload: { product: props.product },
                })
            : navigate("../login")
        }
      >
        <i className="fa fa-heart wishlist-icon" aria-hidden="true"></i>
        <FaHeart
          className="wishlist-icon"
          color={inWishlist ? "red" : "gray"}
        />
      </div>
      <div className="card-body">
        <h1 className="card-title text-md">{props.product.name}</h1>

        <div className="card-description">
          <div className="text-md">
            {`Ratings: ${props.product.ratings} / 5 `}
            <FaStar className="rating-star fas fa-star" />
          </div>
          <span className="price-new text-md font-extrabold">
            {`Price: ₹${props.product.discountedPrice}`}{" "}
          </span>{" "}
          <span className="text-md font-light price-old font-light text-gray">{`₹${props.product.price}`}</span>
          <p className="text-md">
            <small>{`${props.product.discount}- off`}</small>
          </p>
        </div>

        <div className="flex-row flex-center">
          {props.page === "wishlistPage" ? (
            <CardButton
              variant="button-primary card-button"
              link="../Cart"
              onClick={() => {
                cartDispatch({
                  type: "ADD-ITEM",
                  payload: {
                    product: props.product,
                  },
                });
                wishlistDispatch({
                  type: "REMOVE-ITEM",
                  payload: { product: props.product },
                });
              }}
              info={
                <>
                  <span className="m-s text-md">Move to cart</span>
                </>
              }
            />
          ) : inCart ? (
            <CardButton
              variant="button-primary card-button"
              link="../Cart"
              info={
                <>
                  <span className="m-s text-md">Go to cart</span>
                </>
              }
            />
          ) : (
            <CardButton
              variant={`button-outline-secondary card-button add-to-cart ${
                inCart ? "no-show" : ""
              }`}
              onClick={() => {
                const temp = cartDispatch({
                  type: "ADD-ITEM",
                  payload: {
                    product: props.product,
                  },
                });
              }}
              info={
                <>
                  <i className="fas fa-shopping-cart"></i>
                  <span className="m-s text-md">Add to cart</span>
                </>
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
