import { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <ul className="flex items-center space-x-8">
      <li>
        <a 
          className="nav-link relative text-neutral-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer" 
          onClick={() => scrollToSection('home')}
        >
          <span className="relative">
            Home
            <motion.span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-lavender to-royal transition-all duration-300"
              whileHover={{ width: "100%" }}
            />
          </span>
        </a>
      </li>
      <li>
        <a 
          className="nav-link relative text-neutral-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer" 
          onClick={() => scrollToSection('about')}
        >
          <span className="relative">
            About
            <motion.span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-lavender to-royal transition-all duration-300"
              whileHover={{ width: "100%" }}
            />
          </span>
        </a>
      </li>
      <li>
        <a 
          className="nav-link relative text-neutral-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer" 
          onClick={() => scrollToSection('work')}
        >
          <span className="relative">
            Work
            <motion.span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-lavender to-royal transition-all duration-300"
              whileHover={{ width: "100%" }}
            />
          </span>
        </a>
      </li>
      <li>
        <a 
          className="nav-link relative text-neutral-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer" 
          onClick={() => scrollToSection('contact')}
        >
          <span className="relative">
            Contact
            <motion.span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-lavender to-royal transition-all duration-300"
              whileHover={{ width: "100%" }}
            />
          </span>
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };
  
  return (
    <motion.div 
      className="fixed inset-x-0 z-50 w-full backdrop-blur-xl bg-primary/80 border-b border-white/10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-4 sm:py-6">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="text-2xl font-bold bg-gradient-to-r from-lavender to-royal bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Rayyan
          </motion.a>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-300 hover:text-white focus:outline-none sm:hidden transition-colors duration-300"
          >
            <motion.img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
          
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden bg-primary/95 border-t border-white/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <nav className="py-6">
            <div className="flex flex-col space-y-4">
              <a 
                onClick={() => scrollToSection('home')}
                className="text-neutral-300 hover:text-white transition-colors duration-300 font-medium py-2 cursor-pointer"
              >
                Home
              </a>
              <a 
                onClick={() => scrollToSection('about')}
                className="text-neutral-300 hover:text-white transition-colors duration-300 font-medium py-2 cursor-pointer"
              >
                About
              </a>
              <a 
                onClick={() => scrollToSection('work')}
                className="text-neutral-300 hover:text-white transition-colors duration-300 font-medium py-2 cursor-pointer"
              >
                Work
              </a>
              <a 
                onClick={() => scrollToSection('contact')}
                className="text-neutral-300 hover:text-white transition-colors duration-300 font-medium py-2 cursor-pointer"
              >
                Contact
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
