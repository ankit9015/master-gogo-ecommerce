import { React, useState, useEffect } from "react";
import axios from "axios";
import { useProductContext } from "../../context/ProductContext/ProductContext";

const ratings = [
  { numStars: "5", ratingName: "5 stars" },
  { numStars: "4", ratingName: "4 stars and above" },
  { numStars: "3", ratingName: "3 stars and above" },
  { numStars: "2", ratingName: "2 stars and above" },
  { numStars: "1", ratingName: "1 star and above" },
];

export function SideBar() {
  const [categories, setCategories] = useState([]);
  const { productState, productDispatch } = useProductContext();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        const categoriesList = response.data.categories;
        setCategories((prev) => [...prev, ...categoriesList]);
      } catch (err) {
        alert(err);
      }
    })();
  }, []);

  return (
    <div className="filter-column flex-column">
      <h3 className="H3">Filters</h3>
      <button
        className="text-md m-m small-button button button-outline-secondary"
        onClick={() => productDispatch({ type: "CLEAR-FILTER" })}
      >
        Clear
      </button>

      <div>
        <h2 className="text-md font-bold">Price</h2>
        <div className="m-s flex-column">
          <div className="text-md price-filter-container flex-row flex-center">
            <span>Min: </span>
            <span className="price-filter-min">0</span>
            <input
              className="price-range-input"
              type="range"
              name="price-filter"
              id="price-filter"
              min="0"
              max="5000"
              value={productState.price.min}
              step="1000"
              onChange={(e) =>
                productDispatch({
                  type: "FILTER-PRICE",
                  payload: { name: "min", value: e.target.value },
                })
              }
            />
            <span className="price-filter-max">5000</span>
          </div>
          <div className="text-md price-filter-container flex-row flex-center">
            <span>Max: </span>
            <span className="price-filter-min">0</span>
            <input
              className="price-range-input"
              type="range"
              name="price-filter"
              id="price-filter"
              min="0"
              max="5000"
              value={productState.price.max}
              step="1000"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER-PRICE",
                  payload: { name: "max", value: e.target.value },
                });
              }}
            />
            <span className="price-filter-max">5000</span>
          </div>
          <div className="flex-row flex-center">
            <span className="m-s">
              Min :
              <input
                className="price-input-show"
                type="number"
                value={productState.price.min}
                readOnly
              />
            </span>
            <span className="m-s">
              Max :
              <input
                className="price-input-show"
                type="number"
                value={productState.price.max}
                readOnly
              />
            </span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-md font-bold">Category</h2>
        <div className="category-filter m-s text-md flex-column">
          {categories.map(({ _id, categoryName }) => {
            return (
              <label key={_id}>
                <input
                  type="checkbox"
                  name="category-filter"
                  checked={productState.categories[categoryName]}
                  onChange={() =>
                    productDispatch({
                      type: "FILTER-CATEGORIES",
                      payload: { category: categoryName },
                    })
                  }
                />
                {categoryName.toUpperCase()}
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="text-md font-bold">Rating</h2>
        <div className="ratings-filter m-s text-md flex-column">
          {ratings.map(({ numStars, ratingName }) => {
            return (
              <label key={numStars}>
                <input
                  type="radio"
                  name="ratings-filter"
                  checked={productState.ratings === numStars}
                  onChange={() =>
                    productDispatch({
                      type: "FILTER-RATINGS",
                      payload: { ratings: numStars },
                    })
                  }
                />
                {ratingName}
              </label>
            );
          })}
        </div>
      </div>
      <div>
        <h2 className="text-md font-bold">Sort by</h2>
        <div className="sort-by-price flex-column m-s text-md">
          <h6 className="text-md">By Price:</h6>
          <label>
            <input
              type="radio"
              name="sort-by-price"
              value="LOWEST-FIRST"
              checked={productState.sort.order === "LOWEST-FIRST"}
              onChange={() =>
                productDispatch({
                  type: "SORT-PRODUCTS",
                  payload: { sortBy: "price", order: "LOWEST-FIRST" },
                })
              }
            />
            Lowest first
          </label>
          <label>
            <input
              type="radio"
              name="sort-by-price"
              value="HIGHEST-FIRST"
              checked={productState.sort.order === "HIGHEST-FIRST"}
              onChange={() =>
                productDispatch({
                  type: "SORT-PRODUCTS",
                  payload: { sortBy: "price", order: "HIGHEST-FIRST" },
                })
              }
            />
            Highest first
          </label>
        </div>
      </div>
    </div>
  );
}
