import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Tecnologias', href: '#technologies' },
    { label: 'Serviços', href: '#services' },
    { label: 'Diferenciais', href: '#differentials' },
    { label: 'Sobre', href: '#about' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">NC</span>
            </div>
            <span className="text-xl font-bold text-white hidden sm:inline" style={{ fontFamily: 'Syne' }}>
              NovaCore's
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                onClick={() => handleScroll(link.href)}
                className="px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => handleScroll('#contact')}
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-sm"
          >
            Vamos Conversar
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-2 py-4 border-t border-gray-800/50 mt-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleScroll(link.href)}
                className="w-full text-left px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-900/50 transition-colors duration-300 rounded text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleScroll('#contact')}
              className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-sm"
            >
              Vamos Conversar
            </button>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}
