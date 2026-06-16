import { useState } from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Products from './components/Products.jsx';
import Cart from './components/Cart.jsx';

const App = () => {
  const localCartLength =
    JSON.parse(localStorage.getItem('cartData'))?.length || 0;
  const [cart, setCart] = useState(localCartLength);

  return (
    <>
      <Cart />
      <Nav cart={cart} />
      <Products setCart={setCart} />
      <Footer />
    </>
  );
};

export default App;
