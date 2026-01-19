import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeContent from './components/HomeContent';
import MenuPage from './components/menu/MenuPage';
import Adres from './components/delivery/Dostavka';
import About from './components/About/About';
import OffersPage from './components/OfferPage';
import Contacts from './components/Contacts';  
import CartModal from './components/CartModal';
import AuthModal from './components/AuthModal'; 
import { CartProvider } from './components/Cart';
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false); 

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomeContent setCurrentPage={setCurrentPage} />;
      case 'menu': return <MenuPage />;
      case 'about': return <About />;
      case 'offers': return <OffersPage onBook={(offer) => alert(offer.title)} />;
      case 'contacts': return <Contacts />;
      case 'adres': return <Adres onBack={() => setCurrentPage('home')} />;
      default: return <HomeContent setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <CartProvider>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        <Header
          setCurrentPage={setCurrentPage}
          onOpenCart={() => setIsCartOpen(true)} 
          onOpenAuth={() => setIsAuthOpen(true)} 
        />

        <main style={{ flex: '1' }}>
          {renderPage()}
        </main>

        <Footer setCurrentPage={setCurrentPage} />

        <CartModal 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
        />

        {isAuthOpen && (
          <AuthModal onClose={() => setIsAuthOpen(false)} />
        )}

      </div>
    </CartProvider>
  );
}

export default App;