// footer.tsx

import React from 'react';
import './Footer.scss';
import logo from '../assets/logo/water.svg';
import vkIcon from '../assets/icons/icons8-vk-circled.svg';
import telegramIcon from '../assets/icons/icons8-telegram-app.svg';
import youtubeIcon from '../assets/icons/icons8-youtube.svg';
import github from '../assets/icons/icons8-github.svg';
import discord from '../assets/icons/icons8-discord.svg';
import whatsapp from '../assets/icons/icons8-whatsapp.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <div className="footer__logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div className="footer__center">
          <div className="footer__column">
            <h4>Полезные ссылки</h4>
            <ul>
              <li><a href="#link1">Ссылка 1</a></li>
              <li><a href="#link2">Ссылка 2</a></li>
              <li><a href="#link3">Ссылка 3</a></li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Контакты</h4>
            <ul>
              <li><a href="#contact">Напишите нам</a></li>
              <li><a href="#support">Поддержка</a></li>
            </ul>
          </div>
          <div className="footer__socials">
            <h4>Найти нас:</h4>
            <a href="#vk"><img src={vkIcon} alt="vk" /></a>
            <a href="#telegram"><img src={telegramIcon} alt="telegram" /></a>
            <a href="#youtube"><img src={youtubeIcon} alt="youtube" /></a>
            <a href="#discord"><img src={discord} alt="discord" /></a>
            <a href="#github"><img src={github} alt="github" /></a>
            <a href="#whatsapp"><img src={whatsapp} alt="whatsapp" /></a>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__address">
            <p className="footer__description">Мы располагаемся:</p>
            <p className="footer__location">Ярославский вокзал, Москва</p>
            <p className="footer__index">305047</p>
          </div>
          <div className="footer__map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A4f3e2990f515ded7df0d24259b23d037d3b0072b53f1b3a82ff9c37f03f949f7&source=constructor"
              title="Карта"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <hr className="footer__divider" />
      <div className="footer__copyright">
        <p>© 2024 Булавацкий Д.О. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
