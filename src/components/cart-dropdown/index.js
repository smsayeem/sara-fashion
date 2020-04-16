import React from "react";
import "./style.scss";
import CustomButton from "../customButton";
import CartItem from "../cart-item";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";

function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 &&
          cartItems.map((item) => <CartItem key={item.id} item={item} />)}
        <CustomButton>Go to checkout</CustomButton>
      </div>
    </div>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     cartItems: state.cart.cartItems,
//   };
// };
// equivalent using selectors
const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};
export default connect(mapStateToProps)(CartDropdown);
