// src/pages/NewsDetailPage.tsx

import React from 'react';
import './NewsDetailPage.scss';

const NewsDetailPage: React.FC = () => {
  return (
    <div className="news-detail-page">
      <h1>Название новости</h1>
      <img src="https://via.placeholder.com/800x400?text=Новости+Изображение" alt="Подробности новости" />
      <p>
        Подробное описание новости. Здесь вы можете предоставить более подробную информацию по теме новостей.
      </p>
    </div>
  );
};

export default NewsDetailPage;
