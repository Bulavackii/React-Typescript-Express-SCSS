// src/pages/NewsPage.tsx

import React from 'react';
import './NewsPage.scss';
import { Link } from 'react-router-dom';

const NewsPage: React.FC = () => {
  return (
    <div className="news-page">
      <h1>Последние новости</h1>
      <div className="news-item">
        <img src="https://via.placeholder.com/300x200?text=Новости+Имидж+1" alt="Новости 1" />
        <h2>Новости Пункт 1</h2>
        <p>Краткое описание новости 1.</p>
        <Link to="/news/1" className="btn-detail">Подробнее</Link>
      </div>
      <div className="news-item">
        <img src="https://via.placeholder.com/300x200?text=Новости+Имидж+2" alt="Новости 2" />
        <h2>Новости Пункт 2</h2>
        <p>Краткое описание новости 2.</p>
        <Link to="/news/2" className="btn-detail">Подробнее</Link>
      </div>
      <div className="news-item">
        <img src="https://via.placeholder.com/300x200?text=Новости+Имидж+3" alt="Новости 3" />
        <h2>Новости Пункт 3</h2>
        <p>Краткое описание новости 3.</p>
        <Link to="/news/3" className="btn-detail">Подробнее</Link>
      </div>
    </div>
  );
};

export default NewsPage;
