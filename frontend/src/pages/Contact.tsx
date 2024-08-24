import React, { useState } from 'react';
import './Contact.scss';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Логика отправки сообщения
    alert(`Сообщение отправлено:\nИмя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nСообщение: ${message}`);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="contact">
      <h1>Связаться с нами</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Имя:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="phone">Телефон:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label htmlFor="message">Сообщение:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Contact;
