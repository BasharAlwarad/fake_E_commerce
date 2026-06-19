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
    <div className="min-h-screen flex flex-col bg-base-200">
      <Nav cart={cart} />
      <main className="flex-1">
        <Products setCart={setCart} />
        <Cart />
      </main>
      <Footer />
    </div>
  );
};

export default App;
