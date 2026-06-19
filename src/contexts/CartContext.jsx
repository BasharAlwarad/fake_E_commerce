import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const localCartLength =
    JSON.parse(localStorage.getItem('cartData'))?.length || 0;
  const [cart, setCart] = useState(localCartLength);

  return <CartContext value={{ cart, setCart }}>{children}</CartContext>;
};

export { CartContext, CartProvider };
