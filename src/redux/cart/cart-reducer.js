import { CartActionTypes } from "./cart-action-type";

const INITIAL_STATE = { hidden: true };

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      console.log("TOGGLE_CART_HIDDEN reducer callled");
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};
export default cartReducer;
