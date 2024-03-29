import { React, createContext, useContext, useEffect, useReducer } from "react";
import { useToast } from "..";

const WishlistContext = createContext();

const defaultState = {
  itemTotal: 0,
  wishlist: [],
  toastMessage: null,
  toastType: null,
};

const findItem = (state, product) => {
  return state.wishlist.find((item) => item.id === product.id);
};

const wishlistReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD-ITEM":
      return findItem(state, payload.product)
        ? state
        : {
            ...state,
            itemTotal: state.itemTotal + 1,
            wishlist: [...state.wishlist, { ...payload.product }],
            toastMessage: "Product added to wishlist",
            toastType: "SUCCESS",
          };

    case "REMOVE-ITEM":
      return findItem(state, payload.product)
        ? {
            ...state,
            itemTotal: state.itemTotal - 1,

            wishlist: state.wishlist.filter(
              (item) => item.id !== payload.product.id
            ),
            toastMessage: "Product removed from wishlist",
            toastType: "SUCCESS",
          }
        : state;
    default:
      return { ...state, toastMessage: null, toastType: null };
  }
};

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    defaultState
  );

  const { addToast } = useToast();

  useEffect(() => {
    wishlistState.toastMessage &&
      addToast({
        content: wishlistState.toastMessage,
        type: wishlistState.toastType,
      });
  }, [wishlistState.toastMessage]);

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
