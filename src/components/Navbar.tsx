import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fechar o menu quando clicar em um link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-soft py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative">
        <div className="flex items-center">
          <MessageSquare className="h-8 w-8 text-accent mr-2" />
          <span className="text-xl font-bold text-primary">Kondar</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#beneficios" className="text-primary hover:text-accent transition-colors duration-300">
            Benefícios
          </a>
          <a href="#como-funciona" className="text-primary hover:text-accent transition-colors duration-300">
            Como Funciona
          </a>
          <a href="#depoimentos" className="text-primary hover:text-accent transition-colors duration-300">
            Depoimentos
          </a>
          <a href="#faq" className="text-primary hover:text-accent transition-colors duration-300">
            FAQ
          </a>
          <a 
            href="https://wa.me/5571991252935?text=Ol%C3%A1%2C%20tudo%20bem%3F" 
            className="bg-accent hover:bg-accent-dark text-white px-5 py-2 rounded-md transition-colors duration-300"
          >
            Agende uma Consultoria
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-300 absolute right-4 top-1/2 -translate-y-1/2"
          aria-label="Menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: isScrolled ? '64px' : '80px' }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col space-y-4">
            <a 
              href="#beneficios" 
              className="text-primary hover:text-accent py-3 px-4 rounded-md hover:bg-gray-50 transition-colors duration-300"
              onClick={handleLinkClick}
            >
              Benefícios
            </a>
            <a 
              href="#como-funciona" 
              className="text-primary hover:text-accent py-3 px-4 rounded-md hover:bg-gray-50 transition-colors duration-300"
              onClick={handleLinkClick}
            >
              Como Funciona
            </a>
            <a 
              href="#depoimentos" 
              className="text-primary hover:text-accent py-3 px-4 rounded-md hover:bg-gray-50 transition-colors duration-300"
              onClick={handleLinkClick}
            >
              Depoimentos
            </a>
            <a 
              href="#faq" 
              className="text-primary hover:text-accent py-3 px-4 rounded-md hover:bg-gray-50 transition-colors duration-300"
              onClick={handleLinkClick}
            >
              FAQ
            </a>
            <a 
              href="https://wa.me/5571991252935?text=Ol%C3%A1%2C%20tudo%20bem%3F" 
              className="bg-accent hover:bg-accent-dark text-white py-3 px-4 rounded-md text-center transition-colors duration-300 mt-4"
              onClick={handleLinkClick}
            >
              Agende uma Consultoria
            </a>
          </div>
        </div>
      </div>

      {/* Overlay para fechar o menu ao clicar fora */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={handleLinkClick}
          style={{ top: isScrolled ? '64px' : '80px' }}
        />
      )}
    </nav>
  );
};

export default Navbar;