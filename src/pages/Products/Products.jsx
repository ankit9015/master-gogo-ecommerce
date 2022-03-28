import React from "react";
import { products } from "../../backend/db/products";

function Products() {
  return (
    <div className="flex-row product-page-main">
      <SideBar />
      <DisplaySection />
    </div>
  );
}

function SideBar() {
  return (
    <div className="filter-column flex-column">
      <div class="flex-row  main-space-between">
        <button className="text-md m-m small-button button-secondary">
          Filter
        </button>
        <button className="text-md m-m small-button button-outline-secondary">
          Clear
        </button>
      </div>

      <div>
        <h2 class="text-lg font-bold">Price</h2>
        <div class="text-md price-filter-container flex-row">
          <span class="price-filter-min text-gray text-lg">50</span>
          <input
            type="range"
            name="price-filter"
            id="price-filter"
            min="50"
            max="200"
          />
          <span class="price-filter-max text-gray text-lg">200</span>
        </div>
      </div>

      <div>
        <h2 class="text-lg font-bold">Category</h2>
        <div class="category-filter text-md">
          <div>
            <input type="checkbox" name="category-filter" id="men-filter" />
            <label for="men-filter">Men</label>
          </div>
          <div>
            <input type="checkbox" name="category-filter" id="women-filter" />
            <label for="women-filter">Women</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="category-filter"
              id="Kids-boy-filter"
            />
            <label for="Kids-boy-filter">Boys</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="category-filter"
              id="Kids-girl-filter"
            />
            <label for="Kids-girl-filter">Girls</label>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-lg font-bold">Rating</h2>
        <div>
          <input type="radio" name="rating-filter" id="equal-and-above-4" />
          <label for="equal-and-above-4">4 stars and above</label>
        </div>
        <div>
          <input type="radio" name="rating-filter" id="equal-and-above-3" />
          <label for="equal-and-above-3">3 stars and above</label>
        </div>
        <div>
          <input type="radio" name="rating-filter" id="equal-and-above-2" />
          <label for="equal-and-above-2">2 stars and above</label>
        </div>
        <div>
          <input type="radio" name="rating-filter" id="equal-and-above-1" />
          <label for="equal-and-above-1">1 stars and above</label>
        </div>
      </div>
      <div>
        <h2 class="text-lg font-bold">Sort by</h2>
        <div>
          <input type="radio" name="rating-filter" id="price-low-to-high" />
          <label for="price-low-to-high">Price-low to high</label>
        </div>
        <div>
          <input type="radio" name="rating-filter" id="price-high-to-low" />
          <label for="price-high-to-low">Price-high to low</label>
        </div>
      </div>
    </div>
  );
}

function DisplaySection() {
  return (
    <div className="product-display-section">
      <h2 class="H2 font-bold line-height-lg">
        Showing All Products{" "}
        <span class="text-md m-s">(Showing 20 Products)</span>
      </h2>

      <div class="product-card-container">
        {products.map((product) => (
          // <Card
          //   variant="vertical"
          //   img={{
          //     src: "./images/product-card.png",
          //     alt="card image",
          //   }}

          // />

          <div class="card-vertical in-wishlist">
            <img
              class="card-img"
              src="./images/product-card.png"
              alt="card image"
            />
            <div class="badge-wishlist flex-row">
              <i class="fa fa-heart wishlist-icon" aria-hidden="true"></i>
            </div>
            <div class="card-body">
              <h1 class="card-title">{product.name}</h1>

              <h6 class="card-title-sub text-gray text-lg">{`${product.discount}- off`}</h6>
              <p class="card-description text-center">
                <span class="price-new text-lg font-extrabold">
                  {`₹${product.discountedPrice}`}{" "}
                </span>{" "}
                <span class="text-lg font-light price-old font-light text-gray">{`₹${product.price}`}</span>
              </p>
              <button class="button button-outline-secondary add-to-cart">
                <i class="fas fa-shopping-cart"></i> Add to cart{" "}
              </button>

              <button class="button button-primary go-to-cart">
                Go to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
