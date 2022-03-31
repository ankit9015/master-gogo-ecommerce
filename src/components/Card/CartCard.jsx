import { React, useState } from "react";
import { CardImage, CardButton } from "./Card";
import "./card.css";

const CartCard = (props) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="cart-card card-horizontal">
      <CardImage src={props.product.img} alt={props.product.name} />
      <div className="card-body">
        <h1 className="card-title">{props.product.name}</h1>

        <div className="card-description">
          <div className="text-md">
            {`Ratings: ${props.product.ratings}`}
            <i className="rating-star fas fa-star"></i>
          </div>
          <div classname="display-block">
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
            className="small-button counter-button button-outline-secondary"
            onClick={() => setItemCount((prev) => (prev > 0 ? prev - 1 : 0))}
          >
            -
          </button>
          <input type="number" value={itemCount} />

          <button
            className="small-button counter-button button-outline-secondary"
            onClick={() => setItemCount((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        {/* <div class="card-body">
                  <h1 class="card-title">Men Premium Jacket</h1>

                  <h6 class="card-title-sub text-gray text-lg">50%- off</h6>
                  <p class="card-description"><span class="price-new text-lg font-extrabold">₹2000  </span> <span class="text-lg font-light price-old font-light text-gray">₹3999</span></p>
                  
                  <div class="flex-row quantity text-md"> 
                    <h4 class="text-md font-bold">Quantity: </h4>
                    <span class="flex-row">
                      <button class="quantity-button small-button button-outline-secondary">-</button>
                      <div class="current-quantity text-center">2</div>
                      <button class="quantity-button small-button button-outline-secondary">+</button>
                    </span>
                  </div> */}
      </div>
    </div>
  );
};

export default CartCard;
