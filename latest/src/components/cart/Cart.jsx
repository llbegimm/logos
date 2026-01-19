// import React, { useState } from 'react';
// // import './Cart.css';

// const Cart = () => {
//   // Временные данные для тестирования темы
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: 'Пицца Маргарита', price: 450, quantity: 2 },
//     { id: 2, name: 'Бургер', price: 350, quantity: 1 },
//     { id: 3, name: 'Кофе', price: 150, quantity: 3 }
//   ]);

//   const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="cart">
//       <h1>🛒 Ваша корзина</h1>
      
//       {cartItems.length === 0 ? (
//         <div className="cart-empty">
//           <h2>Корзина пуста</h2>
//           <p>Добавьте товары из меню</p>
//         </div>
//       ) : (
//         <>
//           <div className="cart-items">
//             {cartItems.map(item => (
//               <div key={item.id} className="cart-item">
//                 <div className="item-info">
//                   <h3>{item.name}</h3>
//                   <p>Цена: {item.price} ₽ × {item.quantity} = {item.price * item.quantity} ₽</p>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="cart-summary">
//             <h2>Итого: {totalPrice} ₽</h2>
//             <button className="checkout-btn">Оформить заказ</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;