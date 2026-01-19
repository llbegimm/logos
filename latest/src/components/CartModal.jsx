import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, CheckCircle, MapPin } from 'lucide-react';
import { useCart } from './Cart';
import './CartModal.css';

const CartModal = () => {
  const {
    cartItems,
    isCartOpen,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    setIsCartOpen,
    clearCart
  } = useCart();
  
  const [isSent, setIsSent] = useState(false);
  
  const [addressData, setAddressData] = useState({
    street: '',
    house: '',
    apartment: '',
    entrance: '',
    floor: '',
    comment: ''
  });

  const TG_TOKEN = "8456719352:AAFqbVwhl7AGH9nD5fgtFXK8URZdAOIAGZc";
  const TG_CHAT_ID = "5089730718";

  if (!isCartOpen) return null;

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressData(prev => ({ ...prev, [name]: value }));
  };

  const handleOrderSubmit = async () => {
    if (!cartItems || cartItems.length === 0) {
      alert("Корзина пуста!");
      return;
    }

    if (!addressData.street || !addressData.house) {
      alert("Пожалуйста, укажите улицу и номер дома!");
      return;
    }

    let orderDetails = "";
    cartItems.forEach((item, index) => {
      orderDetails += `${index + 1}. ${item.name} — ${item.quantity} шт.\n`;
    });

    const addressDetails = `📍 АДРЕС ДОСТАВКИ:\nУлица: ${addressData.street}\nДом: ${addressData.house}${addressData.entrance ? `, Подъезд: ${addressData.entrance}` : ''}${addressData.floor ? `, Этаж: ${addressData.floor}` : ''}${addressData.apartment ? `, Кв: ${addressData.apartment}` : ''}\n${addressData.comment ? `💬 Комментарий: ${addressData.comment}` : ''}`;

    const finalMessage = `🚀 НОВЫЙ ЗАКАЗ\n\n${orderDetails}\n💰 ИТОГО: ${getTotalPrice()} сом\n\n${addressDetails}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text: finalMessage,
        }),
      });

      if (response.ok) {
        setIsSent(true);
        clearCart();
        setTimeout(() => {
          setIsSent(false);
          setIsCartOpen(false);
          setAddressData({ street: '', house: '', apartment: '', entrance: '', floor: '', comment: '' }); // Очистка формы
        }, 3000);
      } else {
        alert("Ошибка при отправке заказа.");
      }
    } catch (error) {
      alert("Ошибка сети!");
    }
  };

  return (
    <div className="cart-modal-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <div className="cart-title">
            <ShoppingBag size={24} />
            <h2>КОРЗИНА</h2>
          </div>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {isSent ? (
          <div className="empty-cart" style={{padding: '40px 10px', textAlign: 'center'}}>
            <CheckCircle size={60} color="#27ae60" style={{margin: '0 auto 15px'}} />
            <h3>ЗАКАЗ ОТПРАВЛЕН!</h3>
            <p>Ожидайте звонка для подтверждения.</p>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-icon">🛒</div>
            <h3>Корзина пуста</h3>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <div className="item-controls">
                      <div className="quantity">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1} className="qty-btn"><Minus size={14} /></button>
                        <span className="qty-value">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="qty-btn"><Plus size={14} /></button>
                      </div>
                      <div className="item-price">{(parseInt(item.price) || 0) * item.quantity} сом</div>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="delete-btn"><Trash2 size={18} /></button>
                </div>
              ))}
            </div>

            {/* --- НОВАЯ СЕКЦИЯ АДРЕСА --- */}
            <div className="address-form-section">
              <h3 className="section-title"><MapPin size={18} /> Адрес доставки</h3>
              <div className="address-inputs">
                <input 
                  type="text" name="street" placeholder="Улица*" 
                  value={addressData.street} onChange={handleAddressChange} required 
                />
                <div className="input-row">
                  <input type="text" name="house" placeholder="Дом*" value={addressData.house} onChange={handleAddressChange} />
                  <input type="text" name="entrance" placeholder="Подъезд" value={addressData.entrance} onChange={handleAddressChange} />
                </div>
                <div className="input-row">
                  <input type="text" name="floor" placeholder="Этаж" value={addressData.floor} onChange={handleAddressChange} />
                  <input type="text" name="apartment" placeholder="Кв/Офис" value={addressData.apartment} onChange={handleAddressChange} />
                </div>
                <textarea name="comment" placeholder="Комментарий к заказу" value={addressData.comment} onChange={handleAddressChange}></textarea>
              </div>
            </div>

            <div className="cart-summary">
              <div className="summary-row total">
                <span>Итого:</span>
                <span className="total-price">{getTotalPrice()} сом</span>
              </div>
              <div className="cart-actions">
                <button onClick={clearCart} className="clear-btn">Очистить</button>
                <button onClick={handleOrderSubmit} className="order-btn">
                  <MessageCircle size={18} /> ОФОРМИТЬ
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;