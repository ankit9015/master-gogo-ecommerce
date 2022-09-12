import { React, createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { useToast } from "../ToastContext/ToastContext";

const CartContext = createContext();

const defaultCartState = {
  itemTotal: 0,
  priceTotal: 0,
  discountedPriceTotal: 0,
  cartItems: [],
  toastMessage: null,
  toastType: null,
  address: null,
};

const findCartItem = (state, product) => {
  return state.cartItems.find((item) => item.id === product.id);
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  const product = payload?.product ?? undefined;

  switch (type) {
    case "ADD-ITEM":
    case "INCREMENT":
      return findCartItem(state, product)
        ? {
            ...state,
            itemTotal: state.itemTotal + 1,
            priceTotal: state.priceTotal + Number(product.price),
            discountedPriceTotal:
              state.discountedPriceTotal + Number(product.discountedPrice),
            cartItems: state.cartItems.map((item) =>
              item.id === product.id ? { ...item, count: item.count + 1 } : item
            ),
            toastMessage: "Product added to cart",
            toastType: "SUCCESS",
          }
        : {
            ...state,
            itemTotal: state.itemTotal + 1,
            priceTotal: state.priceTotal + Number(product.price),
            discountedPriceTotal:
              state.discountedPriceTotal + Number(product.discountedPrice),
            cartItems: [...state.cartItems, { ...product, count: 1 }],
            toastMessage: "Product added to cart",
            toastType: "SUCCESS",
          };

    case "DECREMENT":
      return findCartItem(state, product)
        ? findCartItem(state, product).count > 1
          ? {
              ...state,
              itemTotal: state.itemTotal - 1,
              priceTotal: state.priceTotal - Number(product.price),

              discountedPriceTotal:
                state.discountedPriceTotal - Number(product.discountedPrice),

              cartItems: state.cartItems.map((item) =>
                item.id === product.id
                  ? { ...item, count: item.count > 1 ? item.count - 1 : 0 }
                  : item
              ),
              toastMessage: "Product removed from cart",
              toastType: "SUCCESS",
            }
          : {
              ...state,
              itemTotal: state.itemTotal - 1,

              priceTotal: state.priceTotal - product.price,

              discountedPriceTotal:
                state.discountedPriceTotal - product.discountedPrice,

              cartItems: state.cartItems.filter(
                (item) => item.id !== product.id
              ),
              toastMessage: "Product removed from cart",
              toastType: "SUCCESS",
            }
        : state;
    case "REMOVE-ITEM":
      const itemToRemove = findCartItem(state, product);
      return {
        ...state,
        itemTotal: state.itemTotal - itemToRemove.count,

        priceTotal: state.priceTotal - itemToRemove.price * itemToRemove.count,

        discountedPriceTotal:
          state.discountedPriceTotal -
          itemToRemove.discountedPrice * itemToRemove.count,

        cartItems: state.cartItems.filter(
          (item) => item.id !== itemToRemove.id
        ),
        toastMessage: "Product removed from cart",
        toastType: "SUCCESS",
      };
    case "EMPTY-CART":
      return { ...defaultCartState };
    case "CHANGE-ADDRESS":
      return { ...state, address: payload.address };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const { authState } = useAuth();
  const { addToast } = useToast();
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);
  useEffect(() => {
    cartState.toastMessage &&
      addToast({
        content: cartState.toastMessage,
        type: cartState.toastType,
      });
  }, [cartState.toastMessage]);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
