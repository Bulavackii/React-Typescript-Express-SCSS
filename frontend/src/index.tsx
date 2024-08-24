// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Импортируйте createRoot из react-dom/client
import App from './App';
import './index.scss';

// Найдите элемент с id "root" в вашем HTML
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Target container is not a DOM element.');
}
