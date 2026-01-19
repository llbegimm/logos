import React, { useState, useEffect } from 'react';
import { useCart } from '../components/Cart';
import Hero from '../components/Hero/Hero';
import Reviews from '../components/reviews/Reviews';
import Contacts from '../components/Contacts';
import './HomeContent.css';

const HomeContent = ({ setCurrentPage }) => {
    const { addToCart } = useCart();
    const [dishes, setDishes] = useState([]); 3
    const [isLoading, setIsLoading] = useState(true);
    const [addedToCart, setAddedToCart] = useState({});

    const API_URL = 'https://692692df26e7e41498fab73d.mockapi.io/Baymax';

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setDishes(data.slice(0, 6));
            } catch (error) {
                console.error("Ошибка при загрузке блюд:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchDishes();
    }, []);

    const formatPrice = (price) => {
        const numericPrice = parseInt(price?.toString().replace(/\D/g, '') || 0);
        return numericPrice.toLocaleString('ru-RU') + ' сом';
    };

    const handleAddToCart = (dish) => {
        addToCart(dish);
        setAddedToCart(prev => ({ ...prev, [dish.id]: true }));
        setTimeout(() => setAddedToCart(prev => ({ ...prev, [dish.id]: false })), 1500);
    };

    return (
        <div className="home-content">
            <Hero setCurrentPage={setCurrentPage} />

            <section className="popular-dishes-section">
                <div className="container">
                    <div className="section-header">
                        <h2>ПОПУЛЯРНЫЕ БЛЮДА</h2>
                        <div className="section-divider"></div>
                    </div>

                    {isLoading ? (
                        <div className="loader">Загрузка шедевров...</div>
                    ) : (
                        <div className="popular-dishes-grid">
                            {dishes.map(dish => (
                                <div key={dish.id} className="popular-dish-card">
                                    <div
                                        className="popular-dish-image"
                                        style={{ backgroundImage: `url(${dish.avatar})` }}
                                    >
                                        <div className="dish-price">{formatPrice(dish.price)}</div>
                                    </div>
                                    <div className="popular-dish-content">
                                        <h3 className="popular-dish-name">{dish.name}</h3>
                                        <div className="popular-dish-footer">
                                            <span className="dish-weight">{dish.weight} г</span>
                                            <button
                                                className={`add-to-cart-btn ${addedToCart[dish.id] ? 'added' : ''}`}
                                                onClick={() => handleAddToCart(dish)}
                                            >
                                                {addedToCart[dish.id] ? 'В КОРЗИНЕ' : '+ ДОБАВИТЬ'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="view-all-container">
                        <button className="view-all-btn" onClick={() => setCurrentPage('menu')}>
                            СМОТРЕТЬ ВСЁ МЕНЮ
                        </button>
                    </div>
                </div>
            </section>


            <div className="seamless-wrapper">
                <Reviews />
                <Contacts />
            </div>
        </div>
    );
};

export default HomeContent;