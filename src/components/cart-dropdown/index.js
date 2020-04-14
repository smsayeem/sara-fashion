import React from "react";
import "./style.scss";
import CustomButton from "../customButton";

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>Go to checkout</CustomButton>
      </div>
    </div>
  );
}
export default CartDropdown;
