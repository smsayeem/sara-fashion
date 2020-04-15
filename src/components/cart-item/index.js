import React from "react";
import "./style.scss";

function CartItem({ item }) {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <snap className="name">{name}</snap>
        <snap className="price">
          {quantity} x ${price}
        </snap>
      </div>
    </div>
  );
}
export default CartItem;
