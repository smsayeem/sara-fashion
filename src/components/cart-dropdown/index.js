import React from "react";
import "./style.scss";
import CustomButton from "../customButton";
import CartItem from "../cart-item";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart-action";

function CartDropdown(props) {
  const { cartItems, history, dispatch } = props;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}

        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
        >
          Go to checkout
        </CustomButton>
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

// note: 'connect' also provide dispatch so that without the below function, we can directly dispatch our action
// const mapDispatchToProps = (dispatch) => {
//   return {
//     toggleCartHidden: () => dispatch(toggleCartHidden()),
//   };
// };
export default withRouter(
  connect(mapStateToProps)(CartDropdown)
  // connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
