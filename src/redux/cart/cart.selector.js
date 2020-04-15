import { createSelector } from "reselect";

// input selector: its a function gets the whole state and just return a slice of it. usually one layer deep
const selectCart = (state) => state.cart;

//output selector use input selector and createSelector to build themselves. createSelector takes two argument.
// First a collection(i.e. input selector).
//second argument is a function that will return the value that we want out of the selector

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.selectCartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
