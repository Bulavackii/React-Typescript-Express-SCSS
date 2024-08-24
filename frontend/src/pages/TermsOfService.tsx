// src/pages/TermsOfService.tsx

import React from 'react';
import './TermsOfService.scss';

const TermsOfService: React.FC = () => {
  return (
    <div className="terms-of-service">
      <h1>Пользовательское соглашение</h1>
      <p>
        Здесь будет текст пользовательского соглашения. Пожалуйста, прочитайте его внимательно перед тем, как продолжить регистрацию.
      </p>
      <a href="/register" className="back-to-register">Вернуться к регистрации</a>
    </div>
  );
};

export default TermsOfService;
