import React from "react";

const CheckoutButton = ({ onClick }) => {
  return (
    <button
      className="checkout-button bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all duration-200"
      onClick={onClick}
    >
      Pay
    </button>
  );
};

export default CheckoutButton;
