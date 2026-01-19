import React, { createContext, useState, useContext, useCallback } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Добавить в корзину
  const addToCart = useCallback((item) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  // Удалить из корзины
  const removeFromCart = useCallback((itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  }, []);

  // Изменить количество
  const updateQuantity = useCallback((itemId, quantity) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  }, []);

  // Очистить корзину
  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  // Общая цена
  const getTotalPrice = useCallback(() => {
    return cartItems.reduce((total, item) => {
      const price = parsePrice(item.price);
      return total + (price * item.quantity);
    }, 0);
  }, [cartItems]);

  // Парсер цены
  const parsePrice = (price) => {
    if (typeof price === 'number') return price;
    if (typeof price === 'string') {
      // Убираем все нецифровые символы
      const numeric = price.replace(/\D/g, '');
      return parseInt(numeric) || 0;
    }
    return 0;
  };

  // Общее количество товаров
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Открыть/закрыть корзину
  const toggleCart = useCallback(() => {
    setIsCartOpen(prev => !prev);
  }, []);

  const value = {
    cartItems,
    cartCount,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    toggleCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};