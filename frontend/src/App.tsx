// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import GalleryPage from './pages/GalleryPage';
import ArchivePage from './pages/ArchivePage';
import Contact from './pages/Contact';
import RegisterPage from './pages/RegisterPage';
import TermsOfService from './pages/TermsOfService'; // Импортируем новую страницу

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Body>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Body>
      <Footer />
    </Router>
  );
}

export default App;
