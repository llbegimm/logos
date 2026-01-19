import React, { useState } from "react";
import { dishes } from "../dishes";
import { useCart } from "../Cart"; 
import "./MenuPage.css";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const { addToCart } = useCart(); 

  const categories = ["Все", ...new Set(dishes.map(d => d.category))];
  
  const filteredDishes = selectedCategory === "Все" 
    ? dishes 
    : dishes.filter(dish => dish.category === selectedCategory);

  return (
    <div className="menu-page">
      <div className="container">
        <div className="section-header">
          <h2>Наше Меню</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Выберите ваше любимое блюдо</p>
        </div>

      
        <div className="categories-filter">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredDishes.length > 0 ? (
          <div className="dishes-grid">
            {filteredDishes.map(dish => (
              <div key={dish.id} className="dish-card">
                <div className="dish-image-container">
                  <img src={dish.avatar} alt={dish.name} className="dish-image" />
                  <div className="dish-category-tag">{dish.category}</div>
                  <div className="dish-price-tag">{dish.price} с</div>
                </div>
                
                <div className="dish-content">
                  <h3 className="dish-name">{dish.name}</h3>
                  <p className="dish-description">{dish.description}</p>
                  
                  <div className="dish-footer">
                    <div className="dish-rating">
                      ⭐ {dish.rating || "4.5"}
                    </div>

                    <button
                      className="add-to-cart-btn"
                      onClick={() => addToCart(dish)} 
                    >
                      Добавить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>Блюда не найдены</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;