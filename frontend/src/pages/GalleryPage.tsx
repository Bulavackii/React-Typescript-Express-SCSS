// src/pages/GalleryPage.tsx
import React from 'react';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';
import LocalVideoPlayer from '../components/LocalVideoPlayer'; // Убедитесь, что LocalVideoPlayer импортирован
import './GalleryPage.scss';

const GalleryPage: React.FC = () => {
  return (
    <div className="gallery-page">
      <Gallery />
      <Slider />
      <LocalVideoPlayer />
    </div>
  );
};

export default GalleryPage;
