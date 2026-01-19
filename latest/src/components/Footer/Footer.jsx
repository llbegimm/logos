import React from 'react';
import { FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="footer-black-yellow">
      <div className="footer-container">
        
        <div className="footer-left">
          <h2 onClick={() => setCurrentPage('home')}>LOG<span>OS</span></h2>
          <p>Лучший сервис для вас</p>
        </div>

        <div className="footer-center">
          <button onClick={() => setCurrentPage('menu')}>Меню</button>
          <button onClick={() => setCurrentPage('about')}>О нас</button>
          <button onClick={() => setCurrentPage('contacts')}>Контакты</button>
          <button onClick={() => setCurrentPage('adres')}>Доставка</button>
        </div>

        <div className="footer-right">
          <a href="tel:+79990000000"><FaPhone /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;