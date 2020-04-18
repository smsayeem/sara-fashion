import { CartActionTypes } from "./cart-action-type";

export const toggleCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };
};

export const addItem = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
};

export const cleartItemFromCart = (item) => {
  return {
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};
