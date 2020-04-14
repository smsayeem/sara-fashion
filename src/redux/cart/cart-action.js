import { CartActionTypes } from "./cart-action-type";

const toggleCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };
};
export default toggleCartHidden;
