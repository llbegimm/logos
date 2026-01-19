// src/components/HOT/HOT.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import './HOT.css';

function HOT() {
  const hotItems = [
    { id: 5, name: 'Тарталетки с улитками', weight: '200 г', desc: 'В чесночно-травяном масле', price: 1650, emoji: '🐌', category: 'hot', signature: true },
    { id: 6, name: 'Креветки в пиве', weight: '220 г', desc: 'Тигровые креветки с чесночным соусом', price: 1890, emoji: '🍤', category: 'hot' },
    { id: 7, name: 'Мидии в белом вине', weight: '300 г', desc: 'С чесноком, петрушкой и сливками', price: 1750, emoji: '🦪', category: 'hot' },
    { id: 8, name: 'Камамбер запеченный', weight: '180 г', desc: 'С медом и грецкими орехами', price: 1250, emoji: '🧀', category: 'hot' }
  ];

  return (
    <div className="category-page hot-page">
      <div className="category-header">
        <Link to="/" className="back-button">
          ← На главную
        </Link>
        <h1>
          <span className="category-icon">🍲</span>
          ГОРЯЧИЕ ЗАКУСКИ
        </h1>
      </div>
      
      <div className="category-description">
        <p>Ароматные горячие закуски для разогрева аппетита</p>
      </div>
      
      <div className="products-grid">
        {hotItems.map(item => (
          <ProductCard 
            key={item.id}
            item={item}
            onAddToCart={() => {
              // Логика добавления в корзину
              const cart = JSON.parse(localStorage.getItem('cart') || '[]');
              const existingItem = cart.find(cartItem => cartItem.id === item.id);
              
              if (existingItem) {
                existingItem.quantity += 1;
              } else {
                cart.push({
                  ...item,
                  cartId: Date.now() + Math.random(),
                  quantity: 1
                });
              }
              
              localStorage.setItem('cart', JSON.stringify(cart));
              window.dispatchEvent(new Event('cartUpdated'));
              alert(`${item.name} добавлен в корзину!`);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default HOT;