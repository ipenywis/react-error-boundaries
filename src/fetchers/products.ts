export const fetchCartItems = async () => {
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
  console.error("Cannot fetch products. Server is Down!");
  throw new Error("Cannot fetch products. Server is Down!");

  return cartItems;
};
