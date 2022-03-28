import React from "react";

export function SideBar() {
  return (
    <div className="filter-column flex-column">
      <div class="flex-row  main-space-between">
        <button className="text-md m-m small-button button button-secondary">
          Filter
        </button>
        <button className="text-md m-m small-button button button-outline-secondary">
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
