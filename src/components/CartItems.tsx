import React from "react";
import CartItem from "./CartItem";

const CartItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartItems;
