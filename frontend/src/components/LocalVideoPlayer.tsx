// src/components/LocalVideoPlayer.tsx

import React from 'react';
import './LocalVideoPlayer.scss'; // Стиль для локального видеоплеера
import localVideo from '../assets/video/voda.mp4'; // Импортируем видео

const LocalVideoPlayer: React.FC = () => {
  return (
    <div className="local-video-player">
      <h2>Локальный видеоплеер</h2>
      <video controls>
        <source src={localVideo} type="video/mp4" />
        Ваш браузер не поддерживает тег video.
      </video>
    </div>
  );
};

export default LocalVideoPlayer;
