import React from 'react';
import './VideoPlayer.scss';

const VideoPlayer: React.FC = () => {
  return (
    <div className="video-player">
      <h2>Рекомендуемое видео</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Xcv5yTHteXQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
