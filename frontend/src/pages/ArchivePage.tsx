import React from 'react';
import './ArchivePage.scss';
// Импортируем иконки из Font Awesome (или используйте любой другой набор иконок)
import { FaFileAlt, FaArchive, FaCalendarAlt, FaFolderOpen } from 'react-icons/fa';

const ArchivePage: React.FC = () => {
  return (
    <div className="archive-page">
      <h1>Архив</h1>
      
      <div className="archive-section">
        <h2><FaFolderOpen />Последние статьи</h2>
        <ul>
          <li><FaFileAlt /> Понимание водных ресурсов</li>
          <li><FaFileAlt /> Достижения в области управления водными ресурсами</li>
          <li><FaFileAlt /> Устойчивое использование воды</li>
        </ul>
      </div>

      <div className="archive-section">
        <h2><FaCalendarAlt /> 
        Архивировать по дате</h2>
        <ul>
          <li><FaArchive /> Август 2024</li>
          <li><FaArchive /> Июль 2024</li>
          <li><FaArchive /> Июнь 2024</li>
        </ul>
      </div>

      <div className="archive-section">
        <h2><FaFolderOpen />Категории</h2>
        <ul>
          <li><FaFileAlt /> Экономия воды</li>
          <li><FaFileAlt /> Влияние изменения климата</li>
          <li><FaFileAlt /> Управление ресурсами</li>
        </ul>
      </div>
    </div>
  );
};

export default ArchivePage;
