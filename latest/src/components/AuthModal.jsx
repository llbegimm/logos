import React, { useState } from 'react';
import './AuthModal.css';

const AuthModal = ({ onClose, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (isLogin) {
      const foundUser = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (!foundUser) {
        alert('Неверный email или пароль!');
        return;
      }

      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      
      if (onLoginSuccess) onLoginSuccess(foundUser);
      alert(`С возвращением, ${foundUser.name}!`);
    } else {
      if (users.some((u) => u.email === formData.email)) {
        alert('Такой email уже зарегистрирован!');
        return;
      }

      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      localStorage.setItem('currentUser', JSON.stringify(newUser));

      if (onLoginSuccess) onLoginSuccess(newUser);
      alert('Регистрация успешна!');
    }
    
    onClose(); 
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="auth-modal-close" onClick={onClose}>×</button>
        <h2 className="auth-modal-title">{isLogin ? 'ВХОД' : 'РЕГИСТРАЦИЯ'}</h2>

        <div className="auth-modal-tabs">
          <button 
            type="button"
            className={`auth-tab-btn ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >Вход</button>
          <button 
            type="button"
            className={`auth-tab-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >Регистрация</button>
        </div>

        <form className="auth-modal-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="auth-form-group">
              <label>Имя</label>
              <input name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="Иван" />
            </div>
          )}
          <div className="auth-form-group">
            <label>Email</label>
            <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="mail@example.com" />
          </div>
          <div className="auth-form-group">
            <label>Пароль</label>
            <input name="password" type="password" value={formData.password} onChange={handleChange} required placeholder="••••••" />
          </div>
          <button type="submit" className="auth-submit-btn">
            {isLogin ? 'Войти' : 'Создать аккаунт'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;