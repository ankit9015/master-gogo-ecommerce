import { React, createContext, useContext, useEffect, useReducer } from "react";

const WishlistContext = createContext();

const defaultState = {
  itemTotal: 0,
  wishlist: [],
};

const findWishlistItem = (state, product) => {
  return state.wishlist.find((item) => item.id === product.id);
};

const wishlistReducer = (state, action) => {
  const { type, payload } = action;
  const { product } = payload;

  switch (type) {
    case "ADD-ITEM":
      console.log("inside");
      return findWishlistItem(state, product)
        ? state
        : {
            ...state,
            itemTotal: state.itemTotal + 1,
            wishlist: [...state.wishlist, { ...product }],
          };

    case "REMOVE-ITEM":
      return findWishlistItem(state, product)
        ? {
            ...state,
            itemTotal: state.itemTotal - 1,

            wishlist: state.wishlist.filter((item) => item.id !== product.id),
          }
        : state;
    default:
      return state;
  }
};

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    defaultState
  );

  useEffect(() => console.log(wishlistState));

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
