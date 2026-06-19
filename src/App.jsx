import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Products from './components/Products.jsx';
import Cart from './components/Cart.jsx';

import { CartProvider } from './contexts/CartContext.jsx';
import { DataProvider } from './contexts/DataContext.jsx';

const App = () => {
  return (
    <CartProvider>
      <DataProvider>
        <div className="min-h-screen flex flex-col bg-base-200">
          <Nav />
          <main className="flex-1">
            <Products />
            <Cart />
          </main>
          <Footer />
        </div>
      </DataProvider>
    </CartProvider>
  );
};

export default App;
