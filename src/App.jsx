import React, { useState, useEffect } from 'react';
import './index.css';
import translations from './data/translations';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Sections
import Hero from './sections/Hero';
import Services from './sections/Services';
import Products from './sections/Products';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Contact from './sections/Contact';

function App() {
  const [language, setLanguage] = useState('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <Navbar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        setIsMenuOpen={setIsMenuOpen}
        t={t}
        language={language}
        setLanguage={setLanguage}
      />

      <Hero t={t} />
      <Services t={t} />
      <Products t={t} />
      <Portfolio t={t} />
      <About t={t} />
      <Contact t={t} />

      <WhatsAppButton t={t} />
      <Footer t={t} />
    </div>
  );
}

export default App;
