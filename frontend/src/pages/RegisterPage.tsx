// src/pages/RegisterPage.tsx

import React, { useState } from 'react';
import './RegisterPage.scss';
import { FaUser, FaLock, FaBuilding } from 'react-icons/fa';

const RegisterPage: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="register-page">
      <div className="form-container">
        {isRegistering ? (
          <div className="register-form">
            <h1>Регистрация</h1>
            <form>
              <div className="form-group">
                <label htmlFor="organization">
                  <FaBuilding /> Организация
                </label>
                <input id="organization" type="text" required />
              </div>
              <div className="form-group">
                <label htmlFor="username">
                  <FaUser /> Имя пользователя
                </label>
                <input id="username" type="text" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <FaLock /> Пароль
                </label>
                <input id="password" type="password" required />
              </div>
              <button type="submit">Отправить</button>
              <div className="terms-link">
                <a href="/terms-of-service">Пользовательское соглашение</a>
              </div>
            </form>
          </div>
        ) : (
          <div className="login-form">
            <h1>Вход</h1>
            <form>
              <div className="form-group">
                <label htmlFor="login-username">
                  <FaUser /> Имя пользователя
                </label>
                <input id="login-username" type="text" required />
              </div>
              <div className="form-group">
                <label htmlFor="login-password">
                  <FaLock /> Пароль
                </label>
                <input id="login-password" type="password" required />
              </div>
              <button type="button" onClick={() => setIsRegistering(true)}>Зарегистрироваться</button>
              <button type="submit">Войти</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
