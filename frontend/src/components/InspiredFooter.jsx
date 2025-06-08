import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const InspiredFooter = () => {
  const socialLinks = [
    { icon: <Facebook size={24} />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Instagram size={24} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Twitter size={24} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Linkedin size={24} />, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="py-12 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Copyright &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default InspiredFooter;