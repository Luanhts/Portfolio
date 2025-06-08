import React from 'react';
import { motion } from 'framer-motion';

const InspiredHeader = () => {
  const navItems = [
    { name: 'Works', href: '#featured-works' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contact', href: '#contact' }, 
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 70; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-20">
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-base"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default InspiredHeader;