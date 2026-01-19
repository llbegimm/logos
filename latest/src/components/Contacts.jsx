import React from 'react';
import { MapPin, Phone, Clock, Instagram, Send } from 'lucide-react';
import './Contacts.css';

const Contacts = () => {
  const googleMapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.8341258607144!2d74.58434317658797!3d42.87635200234726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec81915ea075d%3A0xf9fede37851dcd21!2zMTA5INGD0LsuINCi0YPRgNGD0YHQsdC10LrQvtCy0LAsINCR0LjRiNC60LXQuiA3MjAwMDE!5e0!3m2!1sru!2skg!4v1709123456789!5m2!1sru!2skg";

  return (
    <section className="contacts-section">
      <div className="container">
        <h2 className="section-title">КОНТАКТЫ</h2>

        <div className="contacts-simple-grid">
          <div className="contacts-text-side">
            <div className="info-block">
              <MapPin size={20} className="info-icon" />
              <div>
                <strong>Адрес:</strong>
                <p>г. Бишкек, ул. Турусбекова, 109</p>
              </div>
            </div>

            <div className="info-block">
              <Phone size={20} className="info-icon" />
              <div>
                <strong>Телефон:</strong>
                <p><a href="tel:+996553931631">0 (553) 93-16-31</a></p>
              </div>
            </div>

            <div className="info-block">
              <Clock size={20} className="info-icon" />
              <div>
                <strong>Режим работы:</strong>
                <p>Ежедневно: 10:00 — 23:00</p>
              </div>
            </div>

            <div className="social-simple-links">
              <a href="https://www.instagram.com/llbegim_" target="_blank" rel="noopener noreferrer" className="social-link inst">
                <Instagram size={18} /> Instagram
              </a>
              <a href="https://t.me/begimaiykaiymova" target="_blank" rel="noopener noreferrer" className="social-link tg">
                <Send size={18} /> Telegram
              </a>
            </div>
          </div>

          <div className="contacts-map-side">
            <div style={{ width: '100%', height: '100%', minHeight: '400px', background: '#eee', borderRadius: '12px', overflow: 'hidden' }}>
              <iframe
                src={googleMapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Наше местоположение на Турусбекова"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;