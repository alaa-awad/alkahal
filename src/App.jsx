import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial direction
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="font-arabic min-h-screen bg-dark text-white selection:bg-gold selection:text-dark">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}

export default App;
