import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const navLinks = [
    { name: t('home'), href: '#home' },
    { name: t('services'), href: '#services' },
    { name: t('features'), href: '#features' },
    {/*{ name: t('testimonials'), href: '#testimonials' },*/ }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="text-2xl md:text-3xl font-bold text-gold flex items-center gap-2">
            الخال <span className="text-white text-sm bg-gold/20 px-2 py-1 rounded-md ml-2">VIP</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-gold transition-colors text-sm font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4">
              <button onClick={toggleLanguage} className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors">
                <Globe size={18} />
                <span className="text-sm font-bold uppercase">{i18n.language === 'ar' ? 'EN' : 'AR'}</span>
              </button>
              <a href="https://wa.me/971505161988" target="_blank" rel="noopener noreferrer" className="bg-gold hover:bg-gold-hover text-dark font-bold px-5 py-2 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-gold/20">
                {t('contact')}
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleLanguage} className="text-gray-300 hover:text-gold">
              <span className="text-sm font-bold uppercase">{i18n.language === 'ar' ? 'EN' : 'AR'}</span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gold transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-lighter border-t border-white/10"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-gold text-lg font-medium border-b border-white/5 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a href="https://wa.me/971505161988" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="bg-gold text-center text-dark font-bold px-5 py-3 rounded-xl mt-4">
                {t('contact')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
