import React, { useState } from 'react';
import './Auth.css';

const Auth = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');


  if (!isOpen) return null;

  const handleNext = (e) => {
    e.preventDefault();
    if (phone.length > 5) setStep(2);
  };

  return (
    <div className="AuthOverlay" onClick={onClose}>
      
      <div className="AuthCard" onClick={(e) => e.stopPropagation()}>
        
     
        <button className="CloseBtn" onClick={onClose}>&times;</button>
        
        <h2 className="AuthTitle">Добро пожаловать</h2>
        <p className="AuthSub">Выберите одну из опций, чтобы продолжить</p>

        {step === 1 ? (
          <form onSubmit={handleNext}>
            <input 
              className="AuthInput"
              type="tel" 
              placeholder="Номер телефона" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <p className="PolicySmall">
              Этот сайт защищен reCAPTCHA...
            </p>
            <button type="submit" className="BtnWA">
              Продолжить в WhatsApp
            </button>
          </form>
        ) : (
          <div className="StepCode">
            <p>Введите код из WhatsApp, отправленный на <br/> <b>{phone}</b></p>
            <input type="text" placeholder="0 0 0 0" className="CodeInput" maxLength="4" />
            <button className="BtnGold" onClick={onClose}>ПОДТВЕРДИТЬ</button>
            <button className="BackLink" onClick={() => setStep(1)}>Изменить номер</button>
          </div>
        )}

        <div className="AuthDivider">
          <span>или при помощи</span>
        </div>

        <div className="SocialButtons">
          <button className="SocBtn">Google</button>
          <button className="SocBtn">Facebook</button>
          <button className="SocBtn">Адрес эл. почты</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;