// src/pages/LoginPage.tsx

import React from 'react';
import './LoginPage.scss';

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <h1>Вход</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Имя пользователя</label>
          <input id="username" type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input id="password" type="password" required />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;
