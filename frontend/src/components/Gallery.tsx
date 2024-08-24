import React, { useState } from 'react';
import ModalImage from 'react-modal-image';
import './Gallery.scss';

const Gallery: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const images = [
    { src: require('../assets/slider/belarus.jpg'), date: '2023-07-01', alt: 'Беларусь' },
    { src: require('../assets/slider/images.jpeg'), date: '2023-07-05', alt: 'Россия' },
    { src: require('../assets/slider/img.jpeg'), date: '2023-07-10', alt: 'Беларусь' },
  ];

  const filteredImages = selectedDate
    ? images.filter(image => image.date === selectedDate)
    : images;

  return (
    <div className="gallery">
      <h1>Галерея</h1>
      
      <div className="filter">
        <label htmlFor="date-filter">Фильтровать по дате:</label>
        <select
          id="date-filter"
          onChange={(e) => setSelectedDate(e.target.value)}
          value={selectedDate || ''}
        >
          <option value="">Все даты</option>
          <option value="2023-07-01">1 июля 2023 г.</option>
          <option value="2023-07-05">5 июля 2023 г.</option>
          <option value="2023-07-10">10 июля 2023 г.</option>
        </select>
      </div>

      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <div className="gallery-item" key={index}>
            <ModalImage
              small={image.src}
              large={image.src}
              alt={image.alt}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
