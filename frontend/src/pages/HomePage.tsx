// src/pages/HomePage.tsx

import React from 'react';
import VideoPlayer from '../components/VideoPlayer'; // Импортируем компонент VideoPlayer
import './HomePage.scss';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <h1>Добро пожаловать!</h1>
        <p>Какой-то текст</p>
        <a href="/contact" className="cta-button">Связаться с нами</a>
      </div>
      <div className="features">
        <div className="feature">
          <h2>Блок 1</h2>
          <p>Откройте для себя нашу замечательную функцию, которая сделает вашу жизнь проще.</p>
        </div>
        <div className="feature">
          <h2>Блок 2</h2>
          <p>
          Узнайте больше о еще одной функции, которая повышает ценность нашего сервиса.</p>
        </div>
        <div className="feature">
          <h2>Блок 3</h2>
          <p>
          Изучите преимущества нашей третьей функции и посмотрите, как она работает для вас.</p>
        </div>
      </div>
      <div className="video-section">
        <VideoPlayer />
      </div>
      <div className="footer">
        <p>&copy; {new Date().getFullYear()} Voda. All rights reserved.</p>
      </div>
    </div>
  );
};

export default HomePage;
