import { createSelector } from "reselect";

// input selector: its a function gets the whole state and just return a slice of it. usually one layer deep
const selectCart = (state) => state.cart;

//output selector use input selector and createSelector to build themselves. createSelector takes two argument.
// First a collection(i.e. input selector).
//second argument is a function we use the value we received from the input selector as argument

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectDropdownHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  )
);
