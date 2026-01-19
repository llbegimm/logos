import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../CartContext';
import './Header.css';

// Добавили проп onOpenAuth
const Header = ({ setCurrentPage, onOpenAuth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  
  const { cartCount, setIsCartOpen, cartItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleNavClick = (page) => {
    setActiveNav(page);
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const NAV_ITEMS = [
    { id: 'home', label: 'ГЛАВНАЯ' },
    { id: 'menu', label: 'МЕНЮ' },
    { id: 'about', label: 'О НАС' },
    { id: 'adres', label: 'ДОСТАВКА' },
    { id: 'offers', label: 'АКЦИИ' },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-main">
            {/* Логотип */}
            <div 
              className="logo"
              onClick={() => handleNavClick('home')}
            >
              <div className="logo-icon">
                <span className="logo-symbol">🍽</span>
              </div>
              <div className="logo-text">
                <h1 className="logo-title">LOGOS</h1>
                <span className="logo-subtitle">PREMIUM RESTAURANT</span>
              </div>
            </div>

            {/* Контакты и действия */}
            <div className="header-actions">
              <div className="phone-container">
                <div className="phone-number">
                  <span className="phone-code">0 (705)</span> 153-242
                </div>
              </div>

              <button 
                className="cart-container"
                onClick={handleCartClick}
              >
                <div className="cart-icon-wrapper">
                  <ShoppingCart size={24} />
                  {cartCount > 0 && (
                    <span className="cart-count">{cartCount}</span>
                  )}
                </div>
                <div className="cart-info">
                  <span className="cart-text">Корзина</span>
                  <span className="cart-subtext">
                    {cartItems.length > 0 ? `${cartItems.length} товаров` : 'Пусто'}
                  </span>
                </div>
              </button>

              {/* Кнопка ВОЙТИ с привязкой к регистрации */}
              <button className="login-btn" onClick={onOpenAuth}>
                <User size={20} />
                <span>Войти</span>
              </button>

              <button 
                className="mobile-menu-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Навигация */}
          <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {isMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;