import React, { useState } from 'react';
import { useCart } from './CartContext';
import { MapPin, CreditCard, ArrowLeft, Trash2 } from 'lucide-react'; 
import './CartPage.css';

const CartPage = ({ setCurrentPage }) => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  
  const [addressData, setAddressData] = useState({
    street: '',
    house: '',
    apartment: '',
    comment: ''
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressData(prev => ({ ...prev, [name]: value }));
  };

  const changeQty = (id, delta) => {
    const item = cart.find(i => i.id === id);
    if (item) updateQuantity(id, (item.quantity || 1) + delta);
  };

  const handleGoToPayment = () => {
    if (cart.length === 0) return;

    if (!addressData.street || !addressData.house) {
      alert("Пожалуйста, введите улицу и номер дома!");
      return;
    }

    localStorage.setItem('userAddress', JSON.stringify(addressData));

    setCurrentPage('oplata');
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-icon">🛒</div>
        <h2>Корзина пуста</h2>
        <button onClick={() => setCurrentPage('menu')}>В МЕНЮ</button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Оформление заказа</h1>
      
      <div className="cart-wrapper">
        <div className="cart-main-section">
          
          <div className="cart-list">
            <h3>Ваш заказ</h3>
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>{item.price} сом</p>
                </div>
                <div className="item-actions">
                  <div className="qty-controls">
                    <button onClick={() => changeQty(item.id, -1)} disabled={item.quantity <= 1}>–</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => changeQty(item.id, 1)}>+</button>
                  </div>
                  <button className="delete-btn" onClick={() => removeFromCart(item.id)}><Trash2 size={18}/></button>
                </div>
              </div>
            ))}
          </div>

          <div className="address-section">
            <h3><MapPin size={20} /> Куда доставить?</h3>
            <div className="address-grid">
              <input 
                type="text" name="street" placeholder="Улица*" 
                value={addressData.street} onChange={handleAddressChange} 
              />
              <div className="input-row">
                <input type="text" name="house" placeholder="Дом*" value={addressData.house} onChange={handleAddressChange} />
                <input type="text" name="apartment" placeholder="Кв/Офис" value={addressData.apartment} onChange={handleAddressChange} />
              </div>
              <textarea 
                name="comment" placeholder="Комментарий (код домофона, ориентир)" 
                value={addressData.comment} onChange={handleAddressChange}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="cart-sidebar">
          <div className="total-card">
            <h3>ИТОГО</h3>
            <div className="total-row">
              <span>Сумма заказа:</span>
              <strong>{getTotalPrice()} сом</strong>
            </div>
            
            
            
            <button className="back-link" onClick={() => setCurrentPage('menu')}>
              <ArrowLeft size={16} /> Вернуться в меню
            </button>

            <button className="clear-all-link" onClick={clearCart}>Очистить корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;