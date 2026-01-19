import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import CartSidebar from './components/CartSidebar';

function RouterComponent() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Router>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={
            <div className="app-content">
              <MenuPage onCartClick={() => setIsCartOpen(true)} />
            </div>
          } />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        
        {/* Сайдбар корзины (модальное окно) */}
        <CartSidebar 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)}
        />
      </div>
    </Router>
  );
}

export default RouterComponent;