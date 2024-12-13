import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import { getSystemTheme, setTheme } from './utils/theme';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : getSystemTheme() === 'dark';
  });

  useEffect(() => {
    setTheme(darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-white dark:bg-gray-900`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <AnimatePresence mode="wait">
        <main className="relative">
          <section id="hero">
            <Hero />
          </section>
          
          <section id="features" className="scroll-mt-20">
            <Features />
          </section>
          
          <section id="pricing" className="scroll-mt-20">
            <Pricing />
          </section>
          
          <section id="testimonials" className="scroll-mt-20">
            <Testimonials />
          </section>
        </main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;