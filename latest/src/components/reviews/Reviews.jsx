import React, { useState } from 'react';
import { Star, Send, User } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { 
        id: 1, 
        name: 'Айбек', 
        text: 'Очень уютное место! Еда всегда свежая, особенно понравились горячие блюда. Обслуживание на высоте.', 
        rating: 5, 
        date: '12.01.2026' 
    },
    { 
        id: 2, 
        name: 'Мария', 
        text: 'Заказывали доставку, привезли быстро. Всё было горячее и очень вкусное. Будем заказывать еще!', 
        rating: 4, 
        date: '14.01.2026' 
    }
  ]);

  const [formData, setFormData] = useState({ name: '', text: '', rating: 5 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.text) {
      setReviews([{ id: Date.now(), ...formData, date: 'Сегодня' }, ...reviews.slice(0, 1)]);
      setFormData({ name: '', text: '', rating: 5 });
    }
  };

  return (
    <div className="reviews-section-dark">
      <div className="container">
        <h2 className="reviews-title-yellow">ОТЗЫВЫ ГОСТЕЙ</h2>

        <div className="reviews-compact-grid">
          {/* ФОРМА (СЛЕВА) */}
          <div className="dark-form-box">
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Имя" 
                className="dark-input"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
              <div className="stars-picker">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star 
                    key={s} 
                    size={18} 
                    fill={s <= formData.rating ? "#ffcc00" : "none"} 
                    color="#ffcc00" 
                    onClick={() => setFormData({...formData, rating: s})}
                  />
                ))}
              </div>
              <textarea 
                placeholder="Ваш отзыв..." 
                className="dark-input"
                value={formData.text}
                onChange={(e) => setFormData({...formData, text: e.target.value})}
                required 
              ></textarea>
              <button type="submit" className="yellow-btn">
                ОТПРАВИТЬ <Send size={14} />
              </button>
            </form>
          </div>

          {/* ОТЗЫВЫ (СПРАВА) */}
          <div className="reviews-items-column">
            {reviews.map((review) => (
              <div key={review.id} className="dark-review-card">
                <div className="review-top">
                  <span className="user-name"><User size={14} /> {review.name}</span>
                  <span className="review-date">{review.date}</span>
                </div>
                <div className="review-stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill={i < review.rating ? "#ffcc00" : "none"} color="#ffcc00" />
                  ))}
                </div>
                <p className="review-text-content">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;