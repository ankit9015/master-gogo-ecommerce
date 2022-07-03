import {
  React,
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";
import {
  compositeFilter,
  filterPrice,
  filterRatings,
  filterCategories,
  sortProducts,
} from "../../utils/product-filter";

import axios from "axios";

export const initialState = {
  categories: {
    men: false,
    women: false,
    boys: false,
    girls: false,
    unisex: false,
  },
  ratings: 0,
  price: {
    min: 0,
    max: 5000,
  },
  sort: {
    sortBy: "",
    order: "",
  },
};

const productReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FILTER-RATINGS":
      return { ...state, ratings: payload.ratings };

    case "FILTER-CATEGORIES":
      return {
        ...state,
        categories: {
          ...state.categories,
          [payload.category]: !state.categories[payload.category],
        },
      };

    case "FILTER-PRICE":
      return {
        ...state,
        price: { ...state.price, [payload.name]: payload.value },
      };

    case "SORT-PRODUCTS":
      return {
        ...state,
        sort: { ...state.sort, sortBy: payload.sortBy, order: payload.order },
      };

    case "CLEAR-FILTER":
      return initialState;

    default:
      return state;
  }
};

const ProductContext = createContext([]);

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialState
  );

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        const productList = response.data.products;
        setProducts((prev) => [...prev, ...productList]);
      } catch (err) {
        alert(err);
      }
    })();
  }, []);

  const filteredProducts = compositeFilter(
    productState,
    filterCategories,
    filterRatings,
    filterPrice,
    sortProducts
  )(products);

  return (
    <ProductContext.Provider
      value={{
        products: filteredProducts,
        productState,
        productDispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
