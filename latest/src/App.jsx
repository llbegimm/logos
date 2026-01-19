import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeContent from './components/HomeContent';
import MenuPage from './components/menu/MenuPage';
import Adres from './components/delivery/Delivery';
import About from './components/About/About';
import OffersPage from './components/OfferPage';
import Contacts from './components/Contacts';  
import CartModal from './components/CartModal';
import { CartProvider } from './components/CartContext';
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Логика переключения страниц
  const renderPage = () => {
    switch (currentPage) {
      case 'home': 
        return <HomeContent setCurrentPage={setCurrentPage} />;
      case 'menu': 
        return <MenuPage />;
      case 'about': 
        return <About />;
      case 'offers': 
        return <OffersPage onBook={(offer) => alert(offer.title)} />;
      case 'contacts': 
        return <Contacts />;
      case 'adres': 
        return <Adres onBack={() => setCurrentPage('home')} />;
      default: 
        return <HomeContent setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <CartProvider>
      {/* Флекс-контейнер гарантирует, что футер всегда будет прижат к низу, если контента мало */}
      <div className="App" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        backgroundColor: '#f5f5f5' // легкий фон для контраста с черным футером
      }}>
        
        {/* Шапка сайта */}
        <Header
          setCurrentPage={setCurrentPage}
          onOpenCart={() => setIsCartOpen(true)} 
        />

        {/* Основной контент (flex: 1 заставляет его занимать всё свободное место) */}
        <main style={{ flex: '1' }}>
          {renderPage()}
        </main>

        {/* ФУТЕР — ОН ЗДЕСЬ ОДИН НА ВЕСЬ ПРОЕКТ */}
        <Footer setCurrentPage={setCurrentPage} />

        {/* Модальное окно корзины */}
        <CartModal 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
        />
      </div>
    </CartProvider>
  );
}

export default App;