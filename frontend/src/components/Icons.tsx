// src/components/Icons.tsx

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Icons.scss';

const Icons: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const toggleSearch = () => {
    if (isSearching && searchTerm.trim() === '') {
      setIsSearching(false);
    } else {
      setIsSearching(prev => !prev);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim()) {
      alert(`Searching for: ${searchTerm}`);
      setSearchTerm('');
      setIsSearching(false);
    } else {
      setIsSearching(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleProfileClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (isSearching) {
      setIsSearching(false);
    }
    toggleMenu();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target as Node) &&
      searchRef.current && !searchRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
      setIsSearching(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="icons">
      <div className="icons-container" ref={searchRef}>
        <a
          href="#search"
          className="fas fa-search"
          title="Search"
          onClick={(e) => {
            e.preventDefault();
            toggleSearch();
          }}
        ></a>
        <a
          href="#profile"
          className="fas fa-user"
          title="Profile"
          onClick={handleProfileClick}
        ></a>
        <Link
          to="/contact"
          className="fas fa-envelope"
          title="Contact"
        ></Link>
      </div>
      <div className={`search ${isSearching ? 'open' : ''}`} ref={searchRef}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          placeholder="Искать..."
        />
        <a
          href="#search"
          className="fas fa-search"
          title="Search"
          onClick={(e) => {
            e.preventDefault();
            handleSearchSubmit();
          }}
        ></a>
      </div>
      {isMenuOpen && (
        <div className="dropdown-menu" ref={menuRef}>
          <Link to="/register">Войти</Link>
        </div>
      )}
    </div>
  );
};

export default Icons;
