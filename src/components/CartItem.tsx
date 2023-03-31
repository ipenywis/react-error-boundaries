import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="bg-slate-700 flex items-center p-4 mb-4 shadow-md rounded-md">
      <img
        className="w-20 h-20 object-cover rounded-md"
        src={item.image}
        alt={item.name}
      />
      <div className="ml-4 flex flex-col">
        <h4 className="text-lg font-semibold">{item.name}</h4>
        <p className="text-sm font-medium text-gray-400 text-left">
          ${item.price} x {item.quantity}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
