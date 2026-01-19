import React from 'react';
import { Utensils, Heart, ShieldCheck, Users, Trophy, Leaf } from 'lucide-react';
import './about.css'; 

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        
        <section className="about-hero">
          <div className="about-text-content">
            <span className="about-subtitle">О НАС</span>
            <h2 className="about-title">LOGOS — это больше, чем просто еда</h2>
            <p className="about-description">
              История нашего ресторана началась с простой идеи: создать место, где качество премиум-класса 
              встречается с домашним уютом. Мы не используем полуфабрикаты — каждое блюдо готовится 
              «из-под ножа» специально для вас.
            </p>
            
            <div className="about-badges">
              <div className="badge-item">
                <Leaf className="icon-green" size={20} />
                <span>Эко-продукты</span>
              </div>
              <div className="badge-item">
                <Users className="icon-blue" size={20} />
                <span>Команда профи</span>
              </div>
            </div>
          </div>

          <div className="about-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" 
              alt="Наша кухня" 
              className="about-main-img"
            />
          </div>
        </section>

        {/* 2. БЛОК С ЦИФРАМИ */}
        <section className="about-stats">
          <div className="stat-card">
            <h3>10+</h3>
            <p>Лет опыта</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Уникальных блюд</p>
          </div>
          <div className="stat-card">
            <h3>15</h3>
            <p>Лучших поваров</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Счастливых гостей</p>
          </div>
        </section>

        {/* 3. БЛОК ЦЕННОСТИ */}
        <section className="about-values">
          <h2 className="section-title">Почему выбирают нас</h2>
          <div className="values-grid">
            <div className="value-card">
              <Trophy className="icon-gold" size={40} />
              <h4>Высокий стандарт</h4>
              <p>Мы следим за качеством каждого ингредиента, от соли до редких морепродуктов.</p>
            </div>

            <div className="value-card">
              <Heart className="icon-red" size={40} />
              <h4>Сделано с любовью</h4>
              <p>Для нас это не работа, а призвание. Мы хотим, чтобы вы возвращались снова.</p>
            </div>

            <div className="value-card">
              <ShieldCheck className="icon-green-alt" size={40} />
              <h4>Безопасность</h4>
              <p>Идеальная чистота на кухне и соблюдение всех норм хранения продуктов.</p>
            </div>
          </div>
        </section>

        {/* 4. ЦИТАТА */}
        <section className="about-quote">
          <span className="quote-mark">“</span>
          <p className="quote-text">
            Ваш комфорт и удовольствие от трапезы — наш главный приоритет. Мы ждем вас каждый день, чтобы удивлять новыми вкусами.
          </p>
          <h5 className="quote-author">— Команда LOGOS</h5>
        </section>

      </div>
    </div>
  );
};

export default About;