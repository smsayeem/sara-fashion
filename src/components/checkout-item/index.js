import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import { cleartItemFromCart, addItem, removeItem } from "../../redux/cart/cart-action";

function CheckoutItem({ cartItem, dispatch }) {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={()=>dispatch(removeItem(cartItem))}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={()=>dispatch(addItem(cartItem))}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => dispatch(cleartItemFromCart(cartItem))}
      >
        &#10005;
      </span>
    </div>
  );
}

export default connect()(CheckoutItem);
