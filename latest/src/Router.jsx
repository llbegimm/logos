import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuPage from './components/menu/MenuPage';
import CartPage from './components/CartPage';
import CartModal from './components/CartModal';

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
        <CartModal />
      </div>
    </Router>
  );
}

export default RouterComponent;