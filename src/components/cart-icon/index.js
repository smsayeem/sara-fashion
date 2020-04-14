import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-cart.svg";
import "./style.scss";
import toggleCartHidden from "../../redux/cart/cart-action";
import { connect } from "react-redux";

function CartIcon({ toggleCartHidden }) {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
      <span className="item-count">0</span>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};
// const mapStateToProps = (state) => {
//   return {
//     hidden: state.cart.hidden,
//   };
// };

export default connect(null, mapDispatchToProps)(CartIcon);
