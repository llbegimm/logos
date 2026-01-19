import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { FaFire, FaApple, FaCarrot, FaLemon, FaWindows } from 'react-icons/fa';

const MeatPage = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Ягненок",
      description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      weight: "225 г",
      price: 620,
      oldPrice: 450,
      imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "meat",
      icon: <FaApple className="text-green-500" />
    },
    {
      id: 2,
      name: "Индейка",
      description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      weight: "225 г",
      price: 7900,
      imageUrl: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "meat",
      icon: <FaLemon className="text-yellow-500" />
    },
    {
      id: 3,
      name: "Гусь",
      description: "Фаршированный яблоками",
      weight: "225 г",
      price: 3230,
      imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "meat",
      icon: <FaApple className="text-red-500" />
    },
    {
      id: 4,
      name: "Утка",
      description: "Фаршированная рисом, курагой",
      weight: "225 г",
      price: 8500,
      imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "meat",
      icon: <FaCarrot className="text-orange-500" />
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Заголовок страницы */}
      <div className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Мясные блюда</h1>
          <p className="text-gray-600">Попробуйте наши лучшие мясные деликатесы</p>
        </div>
      </div>

      {/* Сетка продуктов */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map(product => (
            <div key={product.id} className="transform transition-transform hover:scale-[1.02]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Блок Горячие Закуски */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <FaFire className="text-3xl" />
              <h2 className="text-3xl font-bold">ГОРЯЧИЕ ЗАКУСКИ</h2>
            </div>
            <p className="text-lg mb-6">
              Самые популярные горячие закуски к вашему столу. Готовятся быстро, подаются горячими!
              Идеальное дополнение к мясным блюдам.
            </p>
            <button className="bg-white text-orange-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition shadow-lg">
              Смотреть все закуски →
            </button>
          </div>
        </div>

        {/* Уведомление Windows */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center gap-6">
              <div className="bg-white text-blue-700 w-16 h-16 rounded-xl flex items-center justify-center text-3xl font-bold">
                <FaWindows className="text-4xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Как правило, Windows</h3>
                <p className="text-lg mt-1 opacity-90">После заказа в Windows — Тайм нет!</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-blue-400">
              <p className="opacity-90">
                Наше приложение работает на всех версиях Windows. Быстрая доставка,
                удобный интерфейс и мгновенное подтверждение заказа.
              </p>
              <div className="flex gap-4 mt-6">
                <button className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-6 rounded-lg transition">
                  Скачать для Windows
                </button>
                <button className="bg-transparent border border-white hover:bg-white/10 text-white py-2 px-6 rounded-lg transition">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeatPage;