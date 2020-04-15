import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-cart.svg";
import "./style.scss";
import { toggleCartHidden } from "../../redux/cart/cart-action";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

function CartIcon({ toggleCartHidden, itemCount }) {
  console.log("itemCount=", itemCount);
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};
// const mapStateToProps = ({ cart: { cartItems } }) => {
//   return {
//     itemCount: cartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity,
//       0
//     ),
//   };
// };
// equivalent using with selector for memorise selection

const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemsCount(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
