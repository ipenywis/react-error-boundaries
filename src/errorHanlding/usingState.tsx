import React, { useEffect, useState } from "react";
import CartItems from "../components/CartItems";
import CheckoutSummary from "../components/CheckoutSummary";
import CheckoutButton from "../components/CheckoutButton";
import { ProductsFetchingError } from "../components/errors/ProductsFetchingError";

const fetchCartItems = async () => {
  const response = await fetch("https://fakestoreapi.com/products?limit=5");
  const products = await response.json();
  const cartItems = products.map((product) => ({
    id: product.id,
    name: product.title,
    image: product.image,
    price: product.price,
    quantity: Math.floor(Math.random() * 5) + 1, // Generate a random quantity between 1 and 5
  }));

  //Simulate error throwing...
  throw new Error("Cannot fetch products. Server is Down!");

  return cartItems;
};

export { fetchCartItems };

export const UsingState = () => {
  const [cartItems, setCartItems] = useState([]);

  const [error, setError] = useState<null | string>(null);

  const handlePayClick = () => {
    // Handle the payment process here
  };

  const subtotal = cartItems.reduce(
    (sum, item: any) => sum + item.price * item.quantity,
    0
  );
  const discount = 0; // Calculate any discount here
  const total = subtotal - discount;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await fetchCartItems();
        setCartItems(items);
      } catch (err) {
        if (err) setError((err as Error).message);
      }
    };
    fetchItems();
  }, []);

  if (error) return <ProductsFetchingError error={error} />;

  return (
    <div className="checkout-page min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Checkout</h1>
        <CartItems items={cartItems} />
        <CheckoutSummary
          subtotal={subtotal}
          discount={discount}
          total={total}
        />
        <div className="mt-4">
          <CheckoutButton onClick={handlePayClick} />
        </div>
      </div>
    </div>
  );
};
