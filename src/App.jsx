import Nav from './components/Nav.jsx';
import { useState } from 'react';
import Footer from './components/Footer.jsx';

const App = () => {
  const [cart, setCart] = useState(100);
  return (
    <>
      <button onClick={() => setCart(0)}>clear cart</button>
      <Nav cart={cart} />
      <Footer />
    </>
  );
};

export default App;
