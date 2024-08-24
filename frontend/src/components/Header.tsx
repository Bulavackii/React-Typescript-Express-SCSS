import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../assets/logo/rosvod.svg';
import Icons from './Icons';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="header__nav">
        <Link to="/">Об агентстве</Link>
        <Link to="/news">Новости</Link>
        <Link to="/gallery">Галерея</Link>
        <Link to="/archive">Архив</Link>
      </nav>
      <div className="header__icons">
        <Icons />
      </div>
    </header>
  );
};

export default Header;
