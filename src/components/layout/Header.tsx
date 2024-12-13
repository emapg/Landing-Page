import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Button from '../common/Button';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        isScrolled ? 'backdrop-blur-sm' : ''
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">3D App</div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-blue-400 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-white hover:text-blue-400 transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-white hover:text-blue-400 transition-colors">
              Testimonials
            </a>
            <Button variant="primary" size="sm">
              Download Now
            </Button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
            >
              {darkMode ? <Sun className="text-white" size={20} /> : <Moon className="text-white" size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
            >
              {darkMode ? <Sun className="text-white" size={20} /> : <Moon className="text-white" size={20} />}
            </button>
            <button
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pt-4 pb-2"
          >
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-white hover:text-blue-400 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-white hover:text-blue-400 transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-white hover:text-blue-400 transition-colors">
                Testimonials
              </a>
              <Button variant="primary" size="sm" className="w-full">
                Download Now
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;