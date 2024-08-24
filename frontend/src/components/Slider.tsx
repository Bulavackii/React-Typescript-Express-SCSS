import React, { useState, useRef } from 'react';
import './Slider.scss';

const Slider: React.FC = () => {
  const images = [
    { src: require('../assets/slider/belarus.jpg'), alt: 'Беларусь' },
    { src: require('../assets/slider/images.jpeg'), alt: 'Россия' },
    { src: require('../assets/slider/img.jpeg'), alt: 'Беларусь' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX } = event;
    const { offsetWidth } = sliderRef.current || { offsetWidth: 0 };
    if (clientX < offsetWidth / 3) {
      prevSlide();
    } else if (clientX > (2 * offsetWidth) / 3) {
      nextSlide();
    }
  };

  return (
    <div className="slider-wrapper">
      <h2 className="slider-title">Слайдер</h2>
      <div className="slider" onMouseDown={handleMouseDown} ref={sliderRef}>
        <div className="slider-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((image, index) => (
            <div className="slider-slide" key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
