import React from "react";
import "./hero.css";

const Hero = ({ setCurrentPage }) => {
  return (
    <section className="Hero">
      <div className="Overlay"></div>
      <div className="Container">
        <div className="Box">
          <span className="Label">LOGOS</span>
          <h1 className="Title">PREMIUM RESTAURANT</h1>
          <div className="Line"></div>
          <p className="Text">
            Изысканная кухня и безупречный сервис.
          </p>
          <button className="Btn" onClick={() => setCurrentPage('menu')}>
            СМОТРЕТЬ МЕНЮ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;