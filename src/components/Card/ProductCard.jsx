import React from "react";
import { CardImage, CardButton } from "./Card";
import "./card.css";

function ProductCard(props) {
  return (
    <div className="card-vertical in-wishlist">
      <CardImage src={props.img.src} alt={props.img.alt} />
      <div className="badge-wishlist flex-row button">
        <i className="fa fa-heart wishlist-icon" aria-hidden="true"></i>
      </div>
      <div className="card-body">
        <h1 className="card-title">{props.name}</h1>

        <div className="card-description">
          <div className="text-md">
            {`Ratings: ${props.ratings}`}
            <i className="rating-star fas fa-star"></i>
          </div>
          <span className="price-new text-lg font-extrabold">
            {`Price: ₹${props.discountedPrice}`}{" "}
          </span>{" "}
          <span className="text-lg font-light price-old font-light text-gray">{`₹${props.price}`}</span>
          <div className="text-md">{`${props.discount}- off`}</div>
        </div>

        <div className="flex-row flex-center">
          <CardButton
            variant="button-outline-secondary product-card-button add-to-cart"
            link="../Login"
            info={
              <>
                <i className="fas fa-shopping-cart"></i>
                <span className="m-s text-md">Add to cart</span>
              </>
            }
          />

          <CardButton
            variant="button-primary product-card-button go-to-cart"
            link="../Login"
            info={
              <>
                <span className="m-s text-md">Go to cart</span>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
