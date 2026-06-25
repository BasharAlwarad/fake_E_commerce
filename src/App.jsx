import { BrowserRouter, Routes, Route } from 'react-router';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Products from './components/Products.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

import { CartProvider } from './contexts/CartContext.jsx';
import { DataProvider } from './contexts/DataContext.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <DataProvider>
          <div className="min-h-screen flex flex-col bg-base-200">
            <Nav />
            <main className="flex-1">
              <ErrorBoundary>
                <Routes>
                  <Route path="/" element={<Products />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </ErrorBoundary>
            </main>
            <Footer />
          </div>
        </DataProvider>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
