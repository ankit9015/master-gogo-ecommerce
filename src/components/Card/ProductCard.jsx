import React from "react";
import { CardImage, CardButton } from "./Card";
import "./card.css";

function ProductCard(props) {
  return (
    <div class="card-vertical in-wishlist">
      <CardImage src={props.img.src} alt={props.img.alt} />
      <div class="badge-wishlist flex-row button">
        <i class="fa fa-heart wishlist-icon" aria-hidden="true"></i>
      </div>
      <div class="card-body">
        <h1 class="card-title">{props.name}</h1>

        <div class="card-description">
          <div class="text-md">
            {`Ratings: ${props.ratings}`}
            <i class="rating-star fas fa-star"></i>
          </div>
          <span class="price-new text-lg font-extrabold">
            {`Price: ₹${props.discountedPrice}`}{" "}
          </span>{" "}
          <span class="text-lg font-light price-old font-light text-gray">{`₹${props.price}`}</span>
          <div class="text-md">{`${props.discount}- off`}</div>
        </div>

        <div className="flex-row flex-center">
          <CardButton
            variant="button-outline-secondary product-card-button add-to-cart"
            link="../Login"
            info={
              <>
                <i class="fas fa-shopping-cart"></i>
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
