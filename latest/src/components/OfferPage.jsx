import React from 'react';
import './OfferPage.css';

const OffersPage = ({ onBook }) => {
  const offers = [
    {
      id: 1,
      title: 'БИЗНЕС-ЛАНЧ',
      image: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&w=600&q=80', // Ссылка на фото
      description: 'Специальное меню для деловых встреч с 12:00 до 16:00',
      price: '2500 сом',
      includes: ['Суп дня', 'Основное блюдо', 'Салат', 'Напиток']
    },
    {
      id: 2,
      title: 'РОМАНТИЧЕСКИЙ УЖИН',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80', // Ссылка на фото
      description: 'Идеальный вечер для двоих с живой музыкой',
      price: '2600 сом',
      includes: ['Шампанское', 'Устрицы', 'Основное блюдо', 'Десерт']
    },
    {
      id: 3,
      title: 'ДЕГУСТАЦИЯ ВИН',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80', // Ссылка на фото
      description: 'Дегустация 5 премиальных вин с сомелье',
      price: '3500 сом',
      includes: ['5 видов вина', 'Сырная тарелка', 'Фрукты', 'Экспертное сопровождение']
    }
  ];

  return (
    <div className="offers-page">
      <div className="container">
        <h1>НАШИ АКЦИИ И СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</h1>

        <div className="offers-grid">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-card">
              <div className="offer-image">
                <img src={offer.image} alt={offer.title} />
              </div>

              <div className="offer-content">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <strong className="offer-price">{offer.price}</strong>

                <ul>
                  {offer.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <button
                  className="book-offer-btn"
                  onClick={() => onBook(offer)}
                >
                  ЗАБРОНИРОВАТЬ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersPage;