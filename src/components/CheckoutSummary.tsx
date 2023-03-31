import React from "react";

const CheckoutSummary = ({ subtotal, discount, total }) => {
  throw new Error("Unexpcted Render Error occured!");

  return (
    <div className="checkout-summary p-4 bg-gray-900 border-2 border-slate-200 shadow-md rounded-md">
      <p className="text-lg font-semibold mb-2">Summary</p>
      <p className="text-sm text-gray-500">Subtotal: ${subtotal}</p>
      <p className="text-sm text-gray-500">Discount: ${discount}</p>
      <p className="text-lg font-semibold">Total: ${total}</p>
    </div>
  );
};

export default CheckoutSummary;
